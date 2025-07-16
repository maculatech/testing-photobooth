
// components/service/BackDrop.tsx

import React from 'react'
import { BackdropSection } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'
import { ExternalImage } from '../directImage/DirectImage'

interface BackDropProps {
  data: BackdropSection
}

export const BackDrop: React.FC<BackDropProps> = ({ data }) => {
  return (
    <div className="relative h-[606px] bg-[#FDF9FF] md:h-[1275px] w-full">
      <div className="max-w-[1130px] mt-10 mx-auto h-auto text-center py-4 px-2">
        <h1 className="text-[24px] md:text-[46px] text-[#46423A] leading-tight font-semibold">
          {data.title}
        </h1>
        <p className="text-[16px] md:leading-[26px] md:text-[20px] text-[#2E2E2E] leading-[20px] mt-3 md:text-base">
          {data.description}
        </p>
      </div>
      
      <div className="w-full mt-5 h-[335px] md:h-[957px] relative">
        <ExternalImage
          src={ServicePageAPI.getImageUrl(data.backgroundImage)}
          alt="Backdrop background"
          className="object-cover z-0"
        />
      </div>

      <div className="absolute bottom-[120px] md:bottom-[50px] left-1/2 transform -translate-x-1/2 bg-white text-black h-[100px] md:h-[220px] shadow-lg max-w-[1440px] w-[90%] rounded-md z-10 overflow-hidden">
        <div className="flex items-center justify-between h-full gap-2 p-2">
          {data.galleryImages.map((img, index) => {
            const hideOnMobile = index > 4 ? 'hidden md:block' : 'block'
            return (
              <div
                key={img.id}
                className={`w-[51px] h-[68px] md:w-[122px] md:h-[163px] rounded-sm overflow-hidden ${hideOnMobile}`}
              >
                <ExternalImage
                  src={ServicePageAPI.getImageUrl(img.image)}
                  alt={img.alt}
                  width={122}
                  height={163}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}