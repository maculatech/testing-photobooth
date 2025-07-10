
// components/service/Customized.tsx

import React from 'react'
import { CustomizedSection } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'

interface CustomizedProps {
  data: CustomizedSection
}

export const Customized: React.FC<CustomizedProps> = ({ data }) => {
  const visibleAddOns = ServicePageAPI.filterVisibleItems(data.addOns)

  return (
    <div className='w-full md:content-center h-auto min-h-[797px] px-4 py-16'>
      <div className='text-center mb-10'>
        <h1 className='text-[25px] md:text-[46px] leading-[30px] md:leading-[60px] font-semibold'>
          {data.title}
        </h1>
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:place-items-center max-w-7xl mx-auto'>
        {visibleAddOns.map((item, index) => (
          <div
            key={item.id}
            className='w-full bg-white shadow-xl rounded-[16px] p-6 flex flex-col justify-evenly min-h-[228px] transition-all hover:shadow-2xl'
          >
            <h2 className='text-[32px] text-[#612042] font-bold mb-2'>{item.price}</h2>
            <h3 className='text-[20px] md:text-[28px] text-[#53585A] font-semibold mb-2'>
              {item.title}
            </h3>
            <p className='text-[16px] text-[#808080] leading-[24px]'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
