import React from 'react'
import Image from 'next/image'
import { MomentsSection as MomentsSectionType } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'

interface MomentProps {
  data: MomentsSectionType
}

export const Moment: React.FC<MomentProps> = ({ data }) => {
  if (!data.isVisible || !data.heading || !data.galleryImages?.length || !data.featuredImage) {
    return null
  }

  return (
    <div className="mt-16 px-4 w-full">
      <div className="text-center">
        <h2 className="text-[24px] md:text-[40px] text-[#46423A] font-semibold">{data.heading}</h2>
        {data.subheading && <p className="text-base text-[#2E2E2E] md:text-[20px]">{data.subheading}</p>}
      </div>

      {/* First 4 Images */}
      <div className="grid mt-5 sm:mt-6 gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4">
        {data.galleryImages.slice(0, 4).map((item, idx) => (
          <div key={item.id || idx} className="relative h-[280px] md:h-[480px]">
            {item.image && (
              <Image
                src={HomePageAPI.getImageUrl(item.image)}
                alt={item.altText || item.image.alt || 'Gallery image'}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Featured Image */}
      <div className="mt-5">
        <div className="relative h-[280px] md:h-[677px]">
          {data.featuredImage && (
            <Image
              src={HomePageAPI.getImageUrl(data.featuredImage)}
              alt={data.featuredImage.alt || 'Featured moment'}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Last 3 Images */}
      <div className="grid mt-2 sm:mt-5 gap-2 sm:gap-4 grid-cols-3">
        {data.galleryImages.slice(4, 7).map((item, idx) => (
          <div key={item.id || idx} className="relative h-[280px] md:h-[480px]">
            {item.image && (
              <Image
                src={HomePageAPI.getImageUrl(item.image)}
                alt={item.altText || item.image.alt || 'Gallery image'}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
