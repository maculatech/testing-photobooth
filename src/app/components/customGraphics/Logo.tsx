'use client'

import React from 'react'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div style={{ padding: '0.75rem 1rem' }}>
      <Image
        src="/photoBoothLogoText.png"
        alt="Dashboard Logo"
        width={250}
        height={40}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  )
}
