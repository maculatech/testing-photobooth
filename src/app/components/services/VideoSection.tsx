'use client'
import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5"
import { VideoItem } from '@/app/types/services'
import { ServicePageAPI } from '@/app/lib/api/services'
import { ExternalImage } from '../directImage/DirectImage'

interface VideoSectionProps {
  imageList: VideoItem[]
  title: string
}

export const VideoSection: React.FC<VideoSectionProps> = ({ imageList, title }) => {
  const handleVideoClick = (videoUrl?: string) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank')
    }
  }

  return (
    <div className="text-center mt-16 px-4 w-full">
      <h3 className="uppercase text-[20px] md:text-[46px] text-[#46423A] font-semibold">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4 mt-6">
        {imageList.map((video, idx) => (
          <div key={video.id} className="relative h-[280px] md:h-[531px]">
            <ExternalImage
              src={ServicePageAPI.getImageUrl(video.thumbnail)}
              alt={video.title}
              className="object-cover rounded-[12px] md:rounded-[24px]"
            />
            <div 
              className="absolute top-1/2 text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <IoPlayCircleOutline className='w-[49px] h-[49px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}