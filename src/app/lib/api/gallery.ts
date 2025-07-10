import { GalleryData } from '@/app/types/gallery'

const API_BASE = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

export const GalleryAPI = {
  async getServerSideGalleryData(): Promise<GalleryData | null> {
    try {
      const res = await fetch(`${API_BASE}/api/globals/gallery-page`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      })

      if (!res.ok) throw new Error('Failed to fetch gallery data')

      const json = await res.json()
      return json as GalleryData
    } catch (err) {
      console.error('Error fetching gallery data:', err)
      return null
    }
  },

  getImageUrl(media: any): string {
    if (!media) return '/placeholder.jpg'
    if (typeof media === 'string') return `${API_BASE}${media}`
    if (media.url) return media.url.startsWith('http') ? media.url : `${API_BASE}${media.url}`
    return '/placeholder.jpg'
  },
}
