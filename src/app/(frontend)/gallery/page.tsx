export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line

import React from 'react'
import { GalleryAPI } from '@/app/lib/api/gallery'
import { GalleryData } from '@/app/types/gallery'

export default async function GalleryPage() {
  const data: GalleryData | null = await GalleryAPI.getServerSideGalleryData()

  const isEmpty =
    !data ||
    !data.topGridImages?.length ||
    !data.middleGridImages?.length ||
    !data.secondTopGridImages?.length ||
    !data.bottomGridImages?.length ||
    !data.fullImage1 ||
    !data.fullImage2

  if (isEmpty) {
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
    <div className="mt-16 px-4 w-full mb-16">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] font-semibold">{data.heading}</h2>
        <p className="text-base md:text-[20px]">{data.subheading}</p>
      </div>

      {/* Top 4 Grid */}
      <div className="grid mt-3 sm:mt-6 gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4">
        {data.topGridImages.map((img, idx) => (
          <img
            key={idx}
            className="object-cover w-full h-[280px] md:h-[480px]"
            src={GalleryAPI.getImageUrl(img.image)}
            alt={img.image.alt || `Gallery image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Full Image 1 */}
      <div className="mt-5">
        <img
          className="w-full h-[280px] md:h-[677px] object-cover"
          src={GalleryAPI.getImageUrl(data.fullImage1)}
          alt={data.fullImage1.alt || 'Gallery full image 1'}
        />
      </div>

      {/* Middle 3 Grid */}
      <div className="grid mt-2 sm:mt-5 gap-2 sm:gap-4 grid-cols-3 sm:grid-cols-3">
        {data.middleGridImages.map((img, idx) => (
          <img
            key={idx}
            className="object-cover w-full h-[280px] md:h-[480px]"
            src={GalleryAPI.getImageUrl(img.image)}
            alt={img.image.alt || `Gallery image ${idx + 5}`}
          />
        ))}
      </div>

      {/* Second Top 4 Grid */}
      <div className="grid mt-3 sm:mt-6 gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4">
        {data.secondTopGridImages.map((img, idx) => (
          <img
            key={idx}
            className="object-cover w-full h-[280px] md:h-[480px]"
            src={GalleryAPI.getImageUrl(img.image)}
            alt={img.image.alt || `Gallery image ${idx + 9}`}
          />
        ))}
      </div>

      {/* Full Image 2 */}
      <div className="mt-5">
        <img
          className="w-full h-[280px] md:h-[677px] object-cover"
          src={GalleryAPI.getImageUrl(data.fullImage2)}
          alt={data.fullImage2.alt || 'Gallery full image 2'}
        />
      </div>

      {/* Bottom 3 Grid */}
      <div className="grid mt-2 sm:mt-5 gap-2 sm:gap-4 grid-cols-3 sm:grid-cols-3">
        {data.bottomGridImages.map((img, idx) => (
          <img
            key={idx}
            className="object-cover w-full h-[280px] md:h-[480px]"
            src={GalleryAPI.getImageUrl(img.image)}
            alt={img.image.alt || `Gallery image ${idx + 13}`}
          />
        ))}
      </div>
    </div>
  )
}
