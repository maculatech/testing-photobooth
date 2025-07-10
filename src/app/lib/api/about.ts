import { AboutPage } from '@/app/types/about'

const API_BASE = process.env.NEXT_PUBLIC_SERVER_URL

export const AboutAPI = {
  async getServerSideAboutData(): Promise<AboutPage | null> {
    try {
      const res = await fetch(`${API_BASE}/api/globals/about-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      })

      if (!res.ok) throw new Error('Failed to fetch about-us data')
      const json = await res.json()
      return json as AboutPage
    } catch (err) {
      console.error('Error fetching About Us data:', err)
      return null
    }
  },

  getImageUrl(media: any): string {
    if (typeof media === 'string') {
      return `${API_BASE}${media}`
    }

    if (media && media.url) {
      return media.url.startsWith('http') ? media.url : `${API_BASE}${media.url}`
    }

    return '/placeholder-image.jpg'
  },
}
