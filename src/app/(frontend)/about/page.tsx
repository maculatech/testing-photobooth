export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line

import React from 'react'
import Head from 'next/head'
import { AboutAPI } from '@/app/lib/api/about'
import { AboutContent } from '@/app/components/about/AboutContent'
import { ReadyToBook } from '@/app/components/about/ReadyToBook'

export default async function AboutPage() {
  const aboutData = await AboutAPI.getServerSideAboutData()

  if (!aboutData) {
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
        <title>{aboutData.seo.title}</title>
        <meta name="description" content={aboutData.seo.description} />
        <meta name="keywords" content={aboutData.seo.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <AboutContent data={aboutData.aboutContent} />

        {aboutData.readyBookSection.isVisible && <ReadyToBook data={aboutData.readyBookSection} />}
      </main>
    </>
  )
}
