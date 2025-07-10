'use client'
import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import type { Header as HeaderType, Footer as FooterType } from '@/payload-types'

export default function ClientLayout({
  children,
  headerData,
  footerData
}: {
  children: React.ReactNode
  headerData: HeaderType
  footerData: FooterType
}) {
  return (
    <>
      <Header headerData={headerData} />
      <main>{children}</main>
      <Footer footerData={footerData} />
    </>
  )
}