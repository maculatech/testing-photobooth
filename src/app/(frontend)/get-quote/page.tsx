export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line


import React from 'react'
import Head from 'next/head'
import { GetQuoteAPI } from '@/app/lib/api/getQuote'
import { GetQuoteData } from '@/app/types/getQuote'
import QuoteForm from '@/app/components/get-quote/QuoteForm'
import { HomePageData } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'
import { FAQs } from '@/app/components/home/FAQs'

export default async function GetQuotePage() {
  const data: GetQuoteData | null = await GetQuoteAPI.getServerSideQuoteData()

  let homeData: HomePageData | null = null

  try {
    homeData = await HomePageAPI.getServerSideHomeData()
  } catch (error) {
    console.error('Error loading faq data:', error)
  }
  if (!data || !data.heading || !data.seo || !homeData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Content Not Available</h1>
          <p className="text-gray-600">Please check back later or contact support.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {data.seo?.title && (
        <Head>
          <title>{data.seo.title}</title>
          {data.seo.description && <meta name="description" content={data.seo.description} />}
          {data.seo.keywords && <meta name="keywords" content={data.seo.keywords} />}
        </Head>
      )}
      <div className="mt-8 mb-12"><QuoteForm data={data} /></div>
      {homeData.faqsSection.isVisible && <FAQs data={homeData.faqsSection} />}
    </>
  )
}
