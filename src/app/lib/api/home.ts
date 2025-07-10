import { HomePageData } from '@/app/types/home'

// Configure your Payload CMS API URL
const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

export class HomePageAPI {
  private static baseUrl = `${PAYLOAD_API_URL}/api/globals`

  /*Fetch home page data from Payload CMS*/
  static async getHomePageData(): Promise<HomePageData | null> {
    try {
      const response = await fetch(`${this.baseUrl}/home-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 3600,
          tags: ['home-page'],
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch home page data: ${response.statusText}`)
      }

      const data = await response.json()

      // Since it's a singleton, we expect the first document
      if (data.docs && data.docs.length > 0) {
        return data as HomePageData
      }

      return null
    } catch (error) {
      console.error('Error fetching home page data:', error)
      return null
    }
  }

  /* Get specific home page data by ID (if using multiple home page configs)*/

  static async getHomePageDataById(id: string): Promise<HomePageData | null> {
    try {
      const response = await fetch(`${this.baseUrl}/home-page/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 3600,
          tags: [`home-page-${id}`],
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch home page data: ${response.statusText}`)
      }

      const data = await response.json()
      return data as HomePageData
    } catch (error) {
      console.error('Error fetching home page data by ID:', error)
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

  static async getServerSideHomeData(): Promise<HomePageData | null> {
    try {
      const internalUrl = process.env.PAYLOAD_INTERNAL_URL || PAYLOAD_API_URL

      const response = await fetch(`${internalUrl}/api/globals/home-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch home page data: ${response.statusText}`)
      }

      const data = await response.json()

      return data as HomePageData
    } catch (error) {
      console.error('Error fetching server-side home page data:', error)
      return null
    }
  }
}
