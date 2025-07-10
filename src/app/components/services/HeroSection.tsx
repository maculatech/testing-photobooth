// components/service/HeroSection.tsx

import React from 'react'
import Image from "next/image"
import { ServiceHeroSection } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'

interface HeroSectionProps {
  data: ServiceHeroSection
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <div className="relative w-full">
      <div className="h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={ServicePageAPI.getImageUrl(data.heroImage)}
          alt="hero img"
          fill
          className="object-cover z-0"
          priority
        />
      </div>

      <div className="absolute flex justify-center items-center bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white text-center text-black px-6 h-[204px] py-4 shadow-lg w-[90%] rounded-md z-10">
        <div className="h-[206px] md:mt-0 mt-15 md:h-[144px] mx-auto max-w-[996px]">
          <h2 className="text-[20px] md:text-[40px] font-bold mb-2">{data.title}</h2>
          <p className="text-[16px] md:text-[20px] leading-[16px] md:leading-[26px] font-normal">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
