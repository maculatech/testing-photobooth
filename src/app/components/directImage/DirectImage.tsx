// components/ExternalImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

const externalLoader = ({ src }: { src: string }) => src

export const ExternalImage = (props: ImageProps) => {
  return <Image {...props} loader={externalLoader} unoptimized fill />
}
