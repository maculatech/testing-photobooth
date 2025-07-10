export const dynamic = 'force-dynamic'; // Add this line
export const revalidate = 0; // Add this line

import React from 'react'
import Head from 'next/head'
import { ContactAPI } from '@/app/lib/api/contact'
import { ContactPageData } from '@/app/types/contact'
import ContactForm from '@/app/components/contact/contactForm'

import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { IoMdTime } from 'react-icons/io'

const iconMap: Record<string, React.ReactNode> = {
  phone: <FiPhone className="text-[24px]" />,
  email: <MdOutlineEmail className="text-[24px]" />,
  location: <CiLocationOn className="text-[24px]" />,
  time: <IoMdTime className="text-[24px]" />,
}

export default async function ContactPage() {
  const data: ContactPageData | null = await ContactAPI.getServerSideContactData()

  if (!data || !data.contactItems || !data.seo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Content Not Available</h1>
          <p className="text-gray-600">Please check back later or contact support.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{data.seo?.title}</title>
        {data.seo?.description && <meta name="description" content={data.seo.description} />}
        {data.seo?.keywords && <meta name="keywords" content={data.seo.keywords} />}
      </Head>

      <div className="w-full px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#454056] mb-4">{data.heading}</h1>
          <p className="text-[#646269] text-base md:text-lg max-w-2xl">{data.subheading}</p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-[#E064BE]">
          {data.contactItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition bg-[#FDF9FF]"
            >
              <div className="min-w-[52px] min-h-[52px] flex items-center justify-center rounded-[16px] border border-[#E064BE]">
                {iconMap[item.iconName]}
              </div>
              <div>
                <p className="text-[20px] text-[#454056] font-semibold">{item.title}</p>
                <p className="text-[#646269] text-[18px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[32px] leading-[60px] font-semibold">
            {data.formTitle || 'Send Us a Message'}
          </h2>
        </div>

        <div className="md:h-[662px] h-[714px] w-full">
          <ContactForm />
        </div>

        <div className="mt-10">
          <h3 className="text-[20px] text-[#2E2E2E] leading-[60px] font-bold">
            {data.mapHeading || 'Reach Us Directly'}
          </h3>
          <div className="w-full h-[389px] md:h-[629px]">
            <iframe
              src={data.mapEmbedUrl || 'https://maps.google.com'}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
