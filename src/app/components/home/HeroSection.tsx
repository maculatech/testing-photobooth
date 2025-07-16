import React from 'react'
import { HeroSection as HeroSectionType } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'
import { ExternalImage } from '../directImage/DirectImage'

interface HeroSectionProps {
  data: HeroSectionType
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  if (!data.isVisible || !data.heading || !data.heroImage) {
    return null
  }

  return (
    <div className="mt-[50px] flex flex-col px-4 justify-between pt-2 pb-2 md:h-[906px]">
      <div className="flex justify-center">
        <div className="w-full md:w-[642px] text-center">
          <h1 className="font-sans text-[#222222] font-semibold text-3xl md:text-[56px] leading-tight md:leading-[64px] capitalize">
            {data.heading}
          </h1>
          {data.description && (
            <p className="text-base text-[#2E2E2E] md:text-[20px] mt-4 leading-6 font-normal">
              {data.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-end mt-6 md:mt-0">
        <div className="w-full h-auto md:h-[636px] relative rounded-[24px] overflow-hidden">
          <ExternalImage
            src={HomePageAPI.getImageUrl(data.heroImage)}
            alt={data.heroImage.alt || 'Hero banner'}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
