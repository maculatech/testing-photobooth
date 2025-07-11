import React from 'react'
import Image from 'next/image'
import { ServiceDesignSection } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'

interface ServiceDesignProps {
  data: ServiceDesignSection
}

export const ServiceDesign: React.FC<ServiceDesignProps> = ({ data }) => {
  const visibleServices = ServicePageAPI.filterVisibleItems(data.services)

  return (
    <div className='mt-[100px] flex flex-col md:justify-center p-[20px] items-center bg-[#FDF9FF] min-h-screen'>
      <div className='w-full mt-5'>
        <div className='max-w-[875px] text-center mx-auto'>
          <h3 className='md:text-[46px] leading-[28px] text-[#53585A] text-[24px] font-bold md:leading-[52px]'>
            {data.title}
          </h3>
        </div>
      </div>

      <div className='mt-5 space-y-8'>
        {visibleServices.map((service, index) => (
          <div key={service.id} className='md:w-[1110px] md:h-[540px] h-[940px]'>
            <div className={`h-[540px] grid md:justify-center items-center md:grid-cols-2 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={`h-[508px] max-w-[523px] ${
                index % 2 === 1 ? 'order-1 md:order-2' : ''
              }`}>
                <Image
                  src={ServicePageAPI.getImageUrl(service.image)}
                  alt={service.title}
                  width={523}
                  height={508}
                  className='w-full object-cover rounded-[24px] h-full'
                />
              </div>
              
              <div className={`h-[413px] mt-5 flex flex-col justify-evenly md:justify-between ${
                index % 2 === 1 ? 'order-2 md:order-1' : ''
              }`}>
                <div>
                  <h2 className='md:text-[32px] text-[20px] text-[#612042] leading-[20px] font-bold'>
                    Starting <span className='text-[#E064BE] text-[32px]'>{service.price}</span> for{' '}
                    <span className='text-[#E064BE] text-[32px]'>{service.duration}</span>
                    <span className='block text-[16px] md:text-[24px] mt-5'>
                      + {service.extraHourPrice} for extra time
                    </span>
                  </h2>
                </div>
                
                <div className='h-[203px] md:mt-5 text-[#53585A]'>
                  <h3 className='md:text-[28px] text-[18px] leading-[38px] font-bold'>
                    {service.title}
                  </h3>
                  <p className='text-[#808080] mt-0 md:mt-2 md:text-[16px] text-[14px] leading-[26px] font-normal'>
                    <strong className='text-black'>Perfect For</strong>: {service.perfectFor} <br />
                    {service.description}
                  </p>
                  <div className='mt-2 text-[14px] space-y-2.5'>
                    {service.features.map((feature, featureIndex) => {
                      let featureText = '';
                      
                      if (typeof feature === 'string') {
                        featureText = feature;
                      } 
                     
                      else if (typeof feature === 'object' && 'feature' in feature) {
                        featureText = feature.feature;
                      }
                     
                      else if (typeof feature === 'object' && 'text' in feature) {
                        featureText = feature.text;
                      }
                      
                      else {
                        featureText = JSON.stringify(feature);
                      }
                      
                      return <li key={featureIndex}>{featureText}</li>;
                    })}
                  </div>
                </div>
                
                <div className='w-[186px] mt-13 text-white h-[56px] rounded-[8px] bg-[#E064BE]'>
                  <button className='w-full h-full text-[16px] font-bold'>
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}