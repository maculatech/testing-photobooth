'use client'
import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import {
  TestimonialsSection as TestimonialsSectionType,
  Testimonial as TestimonialType,
} from '@/app/types/home'

interface TestimonialProps {
  data: TestimonialsSectionType
}

interface TestimonialCardProps {
  testimonial: TestimonialType
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white flex flex-col shadow-lg rounded-2xl p-3 text-left min-h-[229px]">
      <div className="mb-4">
        {testimonial.name && (
          <p className="text-[16px] font-semibold text-[#612042]">{testimonial.name}</p>
        )}
        {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
      </div>
      <div className="flex items-center gap-1 mb-4">
        {testimonial.rating !== undefined &&
          (() => {
            const rating = testimonial.rating as number
            return (
              <>
                <p className="text-[56px] font-bold">{rating}</p>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </>
            )
          })()}
      </div>
      {testimonial.text && <p className="text-gray-600">{testimonial.text}</p>}
    </div>
  )
}

export const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  const [index, setIndex] = useState<number>(0)
  const [visibleCards, setVisibleCards] = useState<number>(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) setVisibleCards(3)
      else if (width >= 768) setVisibleCards(2)
      else setVisibleCards(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const testimonials = data.testimonials || []

  if (!data.isVisible || !data.heading || testimonials.length === 0) {
    return null
  }

  const maxIndex = testimonials.length - visibleCards

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1)
  }

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1)
  }

  return (
    <section className="w-full text-center h-[805px] content-center">
      {data.subheading && <p className="text-gray-600 mb-3 max-w-xl mx-auto">{data.subheading}</p>}
      <div className="md:w-[714px] mx-auto">
        <h2 className="text-[24px] md:text-[46px] font-bold text-[#612042] mb-2">{data.heading}</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex md:gap-4 h-[273px] transition-transform duration-500"
          style={{
            width: `${(testimonials.length / visibleCards) * 100}%`,
            transform: `translateX(-${(100 / testimonials.length) * index}%)`,
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div key={testimonial.id || i} style={{ width: `${100 / testimonials.length}%` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className={`border-2 rounded-full w-12 h-12 flex items-center justify-center ${
            index === 0
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-[#D3D3D3] hover:border-[#612042]'
          }`}
        >
          <BsArrowLeft />
        </button>

        <button
          onClick={handleNext}
          disabled={index >= maxIndex}
          className={`p-3 border-2 rounded-full w-12 h-12 flex items-center justify-center ${
            index >= maxIndex
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-[#D3D3D3] hover:border-[#612042]'
          }`}
        >
          <BsArrowRight />
        </button>
      </div>
    </section>
  )
}
