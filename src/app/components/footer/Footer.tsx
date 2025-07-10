'use client';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import type { Footer as FooterType } from '@/payload-types';

const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
};

export default function Footer({ footerData }: { footerData: FooterType }) {
  return (
    <footer className="bg-[#612042] text-white px-4 py-10 md:px-10">
      <div className="w-full mx-auto">
        <div className="border-b border-dotted border-white pb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link className="flex items-center mb-4 select-none" href={'/'}>
              {footerData.brand?.logo && typeof footerData.brand.logo === 'object' && (
                <img
                  src={footerData.brand.logo.url || '/photoBoothLogo.png'}
                  alt={footerData.brand.logo.alt || 'DD Photo Booth Logo'}
                  className="w-[70px] h-[70px] mr-3 object-contain"
                />
              )}
              <h2 className="text-[30px] italianno">
                {footerData.brand?.title || 'DD Photo Booth'}
              </h2>
            </Link>
            <p className="text-[14px] leading-[20px] max-w-[276px]">
              {footerData.brand?.description || 
                'Capture the laughter, fun, and memories with our premium photobooth rentals — perfect for weddings, parties, and corporate events.'}
            </p>
          </div>

          {/* Dynamic Columns */}
          {footerData.columns?.map((column, index) => (
            <div 
              key={index} 
              className='flex flex-col justify-between h-[142px] text-[14px] leading-[21px]'
            >
              <h3 className="text-[20px] font-bold leading-[26px] mb-3">
                {column.title}
              </h3>
              {column.links?.map((link, linkIndex) => (
                <p key={linkIndex}>
                  <Link href={link.href || '#'}>{link.label}</Link>
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center mt-8 space-y-6">
          <div className="flex gap-6 text-xl">
            {footerData.socialLinks?.map((social, index) => {
              const Icon = iconMap[social.platform as keyof typeof iconMap];
              return (
                <div 
                  key={index}
                  className='h-[35px] w-[35px] rounded-full content-center bg-[#ffffff]/10'
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.platform} page`}
                  >
                    {Icon && <Icon className="hover:text-pink-400 mx-auto transition" />}
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-center text-gray-300">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}