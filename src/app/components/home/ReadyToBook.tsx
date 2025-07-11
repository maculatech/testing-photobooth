'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReadyToBookSection as ReadyToBookSectionType } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'

interface ReadyBookProps {
  data: ReadyToBookSectionType
}

export const ReadyToBook: React.FC<ReadyBookProps> = ({ data }) => {
  const pathname = usePathname()

  const buttonWidth = pathname === '/services' || pathname === '/about' ? 'w-[217px]' :  'w-[330px]'

  if (
    !data.heading ||
    !data.description ||
    !data.sectionImage ||
    !data.buttonLink ||
    !data.buttonText
  ) {
    return null
  }

  return (
    <div className="mt-16 w-full px-4 mb-2">
      <div className="bg-[#612042] h-[689px] md:h-[578px] rounded-[24px] p-6 md:p-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <div className="text-white text-center md:text-center md:w-1/2 space-y-5">
            <h2 className="text-[24px] md:text-[56px] leading-tight font-semibold">
              {data.heading}
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[26px]">{data.description}</p>
            <Link href={data.buttonLink}>
              <button
                className={`${buttonWidth} h-[56px] rounded-[8px] bg-white text-black font-semibold hover:bg-gray-200 transition`}
              >
                {data.buttonText}
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-[487px] h-[365px] md:h-[537px]">
            <Image
              src={HomePageAPI.getImageUrl(data.sectionImage)}
              alt={data.sectionImage.alt || 'Ready to book'}
              fill
              className="object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
