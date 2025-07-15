'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReadyToBookSection } from '@/app/types/about'
import { AboutAPI } from '@/app/lib/api/about'

interface ReadyBookProps {
  data: ReadyToBookSection;
}

export const ReadyToBook: React.FC<ReadyBookProps> = ({ data }) => {
  const pathname = usePathname();
  const buttonWidth = pathname === '/services' || pathname === '/about' ? 'w-[310px]' : 'w-[217px]';

  if (!data?.isVisible) return null;

  return (
    <div className=" mt-16  w-full px-4 mb-16">
      <div className="bg-[#DEDCEA] h-[689px] md:h-[578px] rounded-[24px] p-6 md:p-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[#00000] text-center md:text-center md:w-1/2 space-y-5">
            <h2 className="text-[24px] md:text-[56px] leading-tight font-semibold">
              {data.heading}
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[26px]">{data.description}</p>
            <Link href={data.buttonLink || '#'}>
              <button
                className={`${buttonWidth}  h-[56px] rounded-[8px] bg-[#612042] text-[#FFFFFF] font-semibold hover:bg-gray-200 transition`}
              >
                {data.buttonText}
              </button>
            </Link>
          </div>

          <div className="relative w-full max-w-[487px] h-[365px] md:h-[537px]">
            <img
              src={AboutAPI.getImageUrl(data.sectionImage)}
              alt={data.sectionImage?.alt || 'Ready to book'}
              className="object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
