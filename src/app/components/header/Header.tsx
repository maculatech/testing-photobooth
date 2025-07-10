'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import type { Header as HeaderType } from '@/payload-types'

export default function Header({ headerData }: { headerData: HeaderType }) {
  const [menuBtn, setMenuBtn] = useState(false)
  const toggleMenu = () => setMenuBtn(!menuBtn)
  const path = usePathname()

  return (
    <div className={`w-full ${menuBtn ? 'h-[500px] bg-white shadow' : 'md:h-[127px]'} relative`}>
      <div className="pt-[10px] shadow flex justify-between items-center px-4 md:px-10">
        {/* Logo Section */}
        <Link className="flex items-center select-none" href={'/'}>
          <div className="relative md:h-[101px] md:w-[101px] h-[56px] w-[56px]">
            {typeof headerData.logo === 'object' && headerData.logo && (
              <Image
                src={headerData.logo.url || '/photoBoothLogo.png'}
                alt={headerData.logo.alt || 'DD Photo Booth Logo'}
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>
          <h2 className="hidden min-lg:block italianno text-[30px] ml-2">{headerData.siteTitle}</h2>
        </Link>

        {/* Navigation Links */}
        <div
          className={`flex text-[16px] text-[#46423A] absolute md:items-center md:static top-[127px] transition-all duration-600 ease-in-out ${
            menuBtn ? 'left-[50%] transform translate-x-[-50%]' : 'left-[-100%]'
          } flex-col md:flex-row gap-10`}
        >
          {headerData.navigation?.map((item, index) => (
            <Link
              key={index}
              href={item.href || '#'}
              className={path === item.href ? 'text-[#E064BE] font-bold' : ''}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + Menu Toggle */}
        <div className="flex items-center gap-5">
          {headerData.ctaButton && (
            <Link
              href={headerData.ctaButton.href || '/getQuote'}
              className="inline-flex justify-center items-center text-[10px] md:text-[16px] font-bold text-white h-[32px] w-[84px] md:w-[144px] md:h-[56px] bg-[#E064BE] rounded-[8px]"
            >
              {headerData.ctaButton.label || 'Get a Quote'}
            </Link>
          )}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuBtn ? <IoCloseSharp className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
          </div>
        </div>
      </div>
    </div>
  )
}
