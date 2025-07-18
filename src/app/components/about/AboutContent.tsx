'use client'

import React from 'react'
import { AboutContent as AboutContentType } from '@/app/types/about'
import { ExternalImage } from '../directImage/DirectImage'

interface AboutContentProps {
  data: AboutContentType
}

export const AboutContent: React.FC<AboutContentProps> = ({ data }) => {
  return (
    <div className="w-full px-4 mt-10 mb-10">
      <div className="relative grid md:grid-cols-2 justify-between items-center h-auto md:h-[856px] max-w-[1440px] mx-auto">
        <div className="h-[398px] md:h-full order-2 md:order-1">
          <ExternalImage
            src={data.image?.url || '/placeholder.jpg'}
            alt={data.image?.alt || 'About Image'}
            width={791}
            height={856}
            className="h-full! w-full! object-cover object-center rounded-md"
          />
        </div>

        <div className="order-1 md:order-2 bg-white p-[20px] md:p-[30px] md:absolute md:right-0 md:h-[627px] w-full md:w-[930px] shadow-lg">
          <h1 className="text-[24px] md:text-[40px] font-bold mb-4">{data.title}</h1>
          <div className="mb-4">
            <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[35px] font-normal text-[#454056]">
              {data.description}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[35px] font-normal text-[#454056]">
              {data.secondaryDescription}
            </p>
          </div>
          <div className="text-center mt-10 pt-4">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#612042]">
              {data.highlightText}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
