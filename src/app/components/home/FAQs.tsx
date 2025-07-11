// 'use client';
// import React, { useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa6';
// import { FAQsSection as FAQsSectionType } from '@/app/types/home';

// interface FAQsProps {
//   data: FAQsSectionType;
// }

// export const FAQs: React.FC<FAQsProps> = ({ data }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleContent = (index: number): void => {
//     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="flex justify-center mt-[0px] w-full items-center">
//       <div className="pl-[25px] h-[686px] w-[676px] pr-[25px] py-[30px]">
//         <div className="text-center mb-[20px]">
//           <p className="text-[#E064BE] text-sm uppercase">{data.subheading}</p>
//           <h3 className="text-[24px] md:text-[46px] font-bold">{data.heading}</h3>
//         </div>

//         <div>
//           {data.faqs.map((faq, index) => (
//             <div key={faq.id || index} className="bg-[#4E4C4C1A]/10 shadow rounded-md mt-[30px] p-4">
//               <div 
//                 className="flex justify-between items-center cursor-pointer" 
//                 onClick={() => toggleContent(index)}
//               >
//                 <h2 className="text-[18px] font-medium text-[#E064BE]">{faq.question}</h2>
//                 <div className="text-[#E064BE]">
//                   {activeIndex === index ? <FaMinus /> : <FaPlus />}
//                 </div>
//               </div>

//               {activeIndex === index && (
//                 <div className="mt-3 transition-transform duration-200 ease-in-out text-[16px] text-[#747474] leading-[25.6px]">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


'use client';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { FAQsSection as FAQsSectionType } from '@/app/types/home';

interface FAQsProps {
  data: FAQsSectionType;
}

export const FAQs: React.FC<FAQsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleContent = (index: number): void => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (!data || !data.faqs || !data.faqs.length) return null;

  return (
    <div className="flex justify-center mt-[0px] w-full items-center mb-4">
      <div className="pl-[25px] h-[686px] w-[676px] pr-[25px] py-[30px]">
        <div className="text-center mb-[20px]">
          {data.subheading && (
            <p className="text-[#612042] text-sm uppercase">{data.subheading}</p>
          )}
          <h3 className="text-[24px] text-[#46423A] md:text-[46px] font-bold">{data.heading}</h3>
        </div>

        <div>
          {data.faqs.map((faq, index) => (
            <div key={faq.id || index} className="bg-[#4E4C4C1A]/10 shadow rounded-md mt-[30px] p-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleContent(index)}
              >
                <h2 className={`text-[18px] ${activeIndex === index ? "text-[#E064BE]" : "text-[#12142A]"}  font-bold`}>{faq.question}</h2>
                <div className={`${activeIndex === index ? "text-[#E064BE]" : "text-[#12142A]"}`}>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              {activeIndex === index && (
                <div className="mt-3 transition-transform duration-200 ease-in-out text-[16px] text-[#747474] leading-[25.6px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
