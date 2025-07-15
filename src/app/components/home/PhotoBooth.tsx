import React from 'react'
import Link from 'next/link'
import { PhotoBoothSection as PhotoBoothSectionType } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'

interface PhotoBoothProps {
  data: PhotoBoothSectionType
}

export const PhotoBooth: React.FC<PhotoBoothProps> = ({ data }) => {
  if (!data.isVisible || !data.heading || !data.booths?.length) {
    return null
  }

  return (
    <div className="mt-10 px-4 max-full">
      <div className="text-center mb-6">
        <h3 className="font-semibold text-[#46423A] text-3xl md:text-[46px]">{data.heading}</h3>
        {data.subheading && (
          <p className="text-base text-[#2E2E2E] md:text-[20px] font-light">{data.subheading}</p>
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 mt-5 md:grid-cols-3">
        {data.booths.map((item, idx) => (
          <div className="relative h-[360px] md:h-[480px]" key={item.id || idx}>
            {item.image && (
              <img
                src={HomePageAPI.getImageUrl(item.image)}
                alt={item.image.alt || item.title || 'Photo booth'}
                className="object-cover"
              />
            )}
            <div className="absolute bottom-0 w-full bg-black/30 px-2 py-3">
              <p className="uppercase text-white text-sm font-light">photo booth</p>
              {item.title && <h3 className="text-white font-bold text-lg">{item.title}</h3>}
            </div>
          </div>
        ))}
      </div>
      {data.ctaButton?.text && data.ctaButton?.link && (
        <div className="mt-10">
          <Link href={data.ctaButton.link}>
            <button className="mx-auto block w-[217px] text-[16px] font-bold h-[56px] bg-[#E064BE] rounded-[8px] text-white hover:bg-[#C555A6] transition-colors">
              {data.ctaButton.text}
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
