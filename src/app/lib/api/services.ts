import { ServicePageData } from '@/app/types/services'

// Configure your Payload CMS API URL
const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

export class ServicePageAPI {
  private static baseUrl = `${PAYLOAD_API_URL}/api`

  /* Fetch service page data from Payload CMS global */
  static async getServicePageData(): Promise<ServicePageData | null> {
    try {
      const response = await fetch(`${this.baseUrl}/globals/services-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 3600,
          tags: ['service-page'],
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch service page data: ${response.statusText}`)
      }

      const data = await response.json()
      return data as ServicePageData
    } catch (error) {
      console.error('Error fetching service page data:', error)
      return null
    }
  }

  /* Fetch specific service by slug */
  static async getServiceBySlug(slug: string): Promise<ServicePageData | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/services?where[slug][equals]=${slug}&limit=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          next: {
            revalidate: 3600,
            tags: [`service-${slug}`],
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch service: ${response.statusText}`)
      }

      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        return data.docs[0] as ServicePageData
      }

      return null
    } catch (error) {
      console.error('Error fetching service by slug:', error)
      return null
    }
  }

  /* Fetch all published services */
  static async getAllServices(): Promise<ServicePageData[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/services?where[isPublished][equals]=true&sort=-publishedAt`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          next: {
            revalidate: 3600,
            tags: ['services-list'],
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.statusText}`)
      }

      const data = await response.json()
      return data.docs || []
    } catch (error) {
      console.error('Error fetching services:', error)
      return []
    }
  }

  /* Fetch service page settings from global */
  static async getServicePageSettings(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/globals/services-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 3600,
          tags: ['service-page-settings'],
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch service page settings: ${response.statusText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching service page settings:', error)
      return null
    }
  }

  /* Get service page data by ID (if using multiple service page configs) */
  static async getServicePageDataById(id: string): Promise<ServicePageData | null> {
    try {
      const response = await fetch(`${this.baseUrl}/services/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 3600,
          tags: [`service-page-${id}`],
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch service page data: ${response.status}`)
      }

      const data = await response.json()
      return data as ServicePageData
    } catch (error) {
      console.error('Error fetching service page data by ID:', error)
      return null
    }
  }

  /* Get image URL with proper handling for Payload media */
  static getImageUrl(media: any): string {
    if (typeof media === 'string') {
      return `${PAYLOAD_API_URL}${media}`
    }

    if (media && media.url) {
      return media.url.startsWith('http') ? media.url : `${PAYLOAD_API_URL}${media.url}`
    }

    return '/placeholder-image.jpg'
  }

  /* Server-side data fetching for Next.js pages */
  static async getServerSideServiceData(): Promise<ServicePageData | null> {
    try {
      const internalUrl = process.env.PAYLOAD_INTERNAL_URL || PAYLOAD_API_URL

      const response = await fetch(`${internalUrl}/api/globals/services-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch service page data: ${response.statusText}`)
      }

      const data = await response.json()
      return data as ServicePageData
    } catch (error) {
      console.error('Error fetching server-side service page data:', error)
      return null
    }
  }

  /* Server-side data fetching for specific service by slug */
  static async getServerSideServiceBySlug(slug: string): Promise<ServicePageData | null> {
    try {
      const internalUrl = process.env.PAYLOAD_INTERNAL_URL || PAYLOAD_API_URL

      const response = await fetch(
        `${internalUrl}/api/services?where[slug][equals]=${slug}&where[isPublished][equals]=true&limit=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch service: ${response.statusText}`)
      }

      const data = await response.json()

      if (data.docs && data.docs.length > 0) {
        return data.docs[0] as ServicePageData
      }

      return null
    } catch (error) {
      console.error('Error fetching server-side service by slug:', error)
      return null
    }
  }

  /* Get all service slugs for static generation */
  static async getAllServiceSlugs(): Promise<string[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/services?where[isPublished][equals]=true&select=slug`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          next: {
            revalidate: 3600,
            tags: ['service-slugs'],
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch service slugs: ${response.statusText}`)
      }

      const data = await response.json()
      return data.docs?.map((service: any) => service.slug) || []
    } catch (error) {
      console.error('Error fetching service slugs:', error)
      return []
    }
  }

  /* Filter visible items */
  static filterVisibleItems<T extends { isVisible?: boolean }>(items: T[]): T[] {
    return items.filter(item => item.isVisible !== false)
  }

}