import React from 'react'
import Head from 'next/head'
import { ServicePageData } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'
import { HomePageData } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'
import { HeroSection } from '@/app/components/services/HeroSection'
import { ServiceDesign } from '@/app/components/services/ServiceDesign'
import { Customized } from '@/app/components/services/Customized'
import { BackDrop } from '@/app/components/services/BackDrop'
import { VideoSection } from '@/app/components/services/VideoSection'
import { Testimonial } from '@/app/components/home/Testimonial'
import { ReadyToBook } from '@/app/components/home/ReadyToBook'
import { FAQs } from '@/app/components/home/FAQs'

export default async function ServicesPage() {
  let data: ServicePageData | null = null
  let homeData: HomePageData | null = null

  try {
    data = await ServicePageAPI.getServerSideServiceData()
  } catch (error) {
    console.error('Error loading service data:', error)
  }

  try {
    homeData = await HomePageAPI.getServerSideHomeData()
  } catch (error) {
    console.error('Error loading home data:', error)
  }

  if (!data || !homeData) {
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
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta
          property="og:image"
          content={ServicePageAPI.getImageUrl(data.seo.ogImage || data?.heroSection?.heroImage)}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.seo.title} />
        <meta name="twitter:description" content={data.seo.description} />
        <meta
          name="twitter:image"
          content={ServicePageAPI.getImageUrl(data.seo.ogImage || data?.heroSection?.heroImage)}
        />
      </Head>

      <main className="min-h-screen">
        {data.heroSection.isVisible && <HeroSection data={data.heroSection} />}

        {data.serviceDesignSection.isVisible && <ServiceDesign data={data.serviceDesignSection} />}

        {data.customizedSection.isVisible && <Customized data={data.customizedSection} />}

        {data.backdropSection.isVisible && <BackDrop data={data.backdropSection} />}

        {data.videoSection.isVisible && (
          <VideoSection
            imageList={data.videoSection.videos.filter((video) => video.isVisible)}
            title={data.videoSection.title}
          />
        )}

        {homeData.testimonialsSection.isVisible && (
          <Testimonial data={homeData.testimonialsSection} />
        )}

        {homeData.readyToBookSection.isVisible && (
          <ReadyToBook data={homeData.readyToBookSection} />
        )}

        {homeData.faqsSection.isVisible && <FAQs data={homeData.faqsSection} />}
      </main>
    </>
  )
}
