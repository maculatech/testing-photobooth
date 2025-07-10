import { GetQuoteData } from '@/app/types/getQuote';

const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/get-quote-page`;

export const GetQuoteAPI = {
  async getServerSideQuoteData(): Promise<GetQuoteData | null> {
    try {
      const res = await fetch(API_URL, { next: { tags: ['get-quote'] }, cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch Get Quote data');
      const json = await res.json();
      return json as GetQuoteData;
    } catch (err) {
      console.error('GetQuoteAPI error:', err);
      return null;
    }
  },
};

