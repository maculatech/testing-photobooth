// // components/ExternalImage.tsx
// 'use client'

// import Image, { ImageLoader, ImageProps } from 'next/image'

// // This loader returns the image as-is (no optimization/proxy)
// const externalLoader: ImageLoader = ({ src }) => src

// export const ExternalImage = (props: ImageProps) => {
//   return (
//     <Image
//       {...props}
//       loader={externalLoader}
//       unoptimized
//     />
//   )
// }

// components/ExternalImage.tsx
'use client'

import Image, { ImageLoader, ImageProps } from 'next/image'

// Prevent _next/image optimization
const externalLoader: ImageLoader = ({ src }) => src

export const ExternalImage = (props: ImageProps) => {
  const hasRequiredSizeProps = props.fill || (props.width && props.height)

  if (!hasRequiredSizeProps) {
    console.error(
      `[ExternalImage] Missing "fill" or "width/height" props for image with src: ${props.src}`
    )
    return null // or return a fallback <div> or <img>
  }

  return (
    <Image
      {...props}
      loader={externalLoader}
      unoptimized
    />
  )
}
