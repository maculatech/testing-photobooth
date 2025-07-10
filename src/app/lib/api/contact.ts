// lib/api/contact.ts
import { ContactPageData } from '@/app/types/contact';

const API_BASE = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

export const ContactAPI = {
  async getServerSideContactData(): Promise<ContactPageData | null> {
    try {
      const res = await fetch(`${API_BASE}/api/globals/contact-page`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch contact data');
      const json = await res.json();
      return json as ContactPageData;
    } catch (err) {
      console.error('Error fetching contact data:', err);
      return null;
    }
  },
};
