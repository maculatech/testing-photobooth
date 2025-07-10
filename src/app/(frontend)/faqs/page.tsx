export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line

import React from 'react'
import Head from 'next/head'
import { HomePageData } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'
import { FAQs } from '@/app/components/home/FAQs'


export default async function FaqPage() {
  let homeData: HomePageData | null = null

  try {
    homeData = await HomePageAPI.getServerSideHomeData()
  } catch (error) {
    console.error('Error loading faq data:', error)
  }

  if (!homeData) {
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
      <Head>
        <title>{homeData.seo.title}</title>
        <meta name="description" content={homeData.seo.description} />
        <meta name="keywords" content={homeData.seo.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main className="min-h-screen">
        {homeData.faqsSection.isVisible && (
          <FAQs data={homeData.faqsSection} />
        )}
      </main>
    </>
  )
}

