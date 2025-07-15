import React from 'react';
import { HowItWorksSection as HowItWorksSectionType } from '@/app/types/home';
import { HomePageAPI } from '@/app/lib/api/home';

interface WorksProps {
  data: HowItWorksSectionType;
}

export const Works: React.FC<WorksProps> = ({ data }) => {
  if (
    !data.isVisible ||
    !data.heading ||
    !data.backgroundImage ||
    !data.steps?.length
  ) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-17">
      <div className="order-2 md:order-1">
        <div className="h-[400px] md:h-[1019px] relative">
          {data.backgroundImage && (
            <img
              src={HomePageAPI.getImageUrl(data.backgroundImage)}
              alt={data.backgroundImage.alt || 'Team photo'}
              className="object-cover"
            />
          )}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <div className="bg-[#612042] h-full text-white flex items-center px-4 md:px-16 py-8">
          <div className="space-y-6 w-full max-w-[600px]">
            <h2 className="text-3xl md:text-[46px] font-semibold">
              {data.heading}
            </h2>

            {data.steps.map((step, i) => (
              <div
                key={step.id || i}
                className="bg-[#B68EA933] rounded-[8px] flex items-center p-4 gap-4"
              >
                <div className="bg-[#612042] w-[50px] h-[50px] flex justify-center items-center text-white rounded-full">
                  <h3 className="text-[20px] font-bold">
                    {step.stepNumber || i + 1}
                  </h3>
                </div>
                <div>
                  {step.title && (
                    <h3 className="text-[18px] md:text-[20px] font-bold">
                      {step.title}
                    </h3>
                  )}
                  {step.description && (
                    <p className="text-[14px] md:text-[16px]">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
