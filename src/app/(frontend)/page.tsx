export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line

import React from 'react'
import Head from 'next/head'
import { HomePageData } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'
import { HeroSection } from '@/app/components/home/HeroSection'
import { ClientLove } from '@/app/components/home/ClientLove'
import { PhotoBooth } from '@/app/components/home/PhotoBooth'
import { VideoSection } from '@/app/components/home/VideoSection'
import { Works } from '@/app/components/home/Works'
import { Moment } from '@/app/components/home/Moment'
import { Testimonial } from '@/app/components/home/Testimonial'
import { ReadyToBook } from '@/app/components/home/ReadyToBook'
import { FAQs } from '@/app/components/home/FAQs'


export default async function HomePage() {
  let homeData: HomePageData | null = null

  try {
    homeData = await HomePageAPI.getServerSideHomeData()
  } catch (error) {
    console.error('Error loading home data:', error)
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

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={homeData.seo.title} />
        <meta property="og:description" content={homeData.seo.description} />
        <meta property="og:image" content={HomePageAPI.getImageUrl(homeData.heroSection.heroImage)} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeData.seo.title} />
        <meta name="twitter:description" content={homeData.seo.description} />
        <meta name="twitter:image" content={HomePageAPI.getImageUrl(homeData.heroSection.heroImage)} />
      </Head>

       <main className="min-h-screen">
        
        {homeData.heroSection.isVisible && (
          <HeroSection data={homeData.heroSection} />
        )}
        
        {homeData.clientLoveSection.isVisible && (
          <ClientLove data={homeData.clientLoveSection} />
        )}
        
        {homeData.photoBoothSection.isVisible && (
          <PhotoBooth data={homeData.photoBoothSection} />
        )}
        
        {homeData.videoSection.isVisible && (
          <VideoSection data={homeData.videoSection} />
        )}
        
        {homeData.howItWorksSection.isVisible && (
          <Works data={homeData.howItWorksSection} />
        )}
        
        {homeData.momentsSection.isVisible && (
          <Moment data={homeData.momentsSection} />
        )}
        
        {homeData.testimonialsSection.isVisible && (
          <Testimonial data={homeData.testimonialsSection} />
        )}
        
        {homeData.readyToBookSection.isVisible && (
          <ReadyToBook data={homeData.readyToBookSection} />
        )}
        
        {homeData.faqsSection.isVisible && (
          <FAQs data={homeData.faqsSection} />
        )}
      </main>
    </>
  )
}

