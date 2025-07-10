'use client';
import React from 'react';
import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { VideoSection as VideoSectionType } from '@/app/types/home';
import { HomePageAPI } from '@/app/lib/api/home';

interface VideoSectionProps {
  data: VideoSectionType;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ data }) => {
  if (!data.isVisible || !data.heading || !data.videos?.length) {
    return null;
  }

  const handleVideoClick = (videoUrl?: string) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div className="text-center mt-16 px-4 w-full">
      <h3 className="uppercase text-[20px] md:text-[46px] font-semibold">
        {data.heading}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4 mt-6">
        {data.videos.map((video, idx) => (
          <div key={video.id || idx} className="relative h-[280px] md:h-[531px]">
            {video.thumbnail && (
              <Image
                src={HomePageAPI.getImageUrl(video.thumbnail)}
                alt={video.thumbnail.alt || 'Video thumbnail'}
                fill
                className="object-cover rounded-[12px] md:rounded-[24px]"
              />
            )}
            {video.videoUrl && (
              <div
                className="absolute top-1/2 text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded cursor-pointer"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <IoPlayCircleOutline className="w-[49px] h-[49px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
