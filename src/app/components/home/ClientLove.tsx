import React from 'react'
import { ClientLoveSection as ClientLoveSectionType } from '@/app/types/home'
import { HomePageAPI } from '@/app/lib/api/home'

interface ClientLoveProps {
  data: ClientLoveSectionType
}

export const ClientLove: React.FC<ClientLoveProps> = ({ data }) => {
  if (!data.isVisible || !data.heading || !data.features?.length) {
    return null
  }

  return (
    <div className="w-full mt-10 px-4">
      <h3 className="font-sans font-semibold text-[24px] text-[#46423A] md:text-[46px] leading-[60px] pt-3">
        {data.heading}
      </h3>
      <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-4">
        {data.features.map((item, idx) => (
          <div key={item.id || idx} className="flex flex-col">
            {item.image && (
              <div className="aspect-[4/5] w-full relative rounded-b-[24px] overflow-hidden">
                <img
                  src={HomePageAPI.getImageUrl(item.image)}
                  alt={item.image.alt || 'Client feature'}
                  className="object-cover"
                />
              </div>
            )}
            <div className="mt-3">
              {item.title && <h3 className="text-[18px] text-[#46423A] font-bold">{item.title}</h3>}
              {item.description && <p className='text-[#2E2E2E] text-[16px]'>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
