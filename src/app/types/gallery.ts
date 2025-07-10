export interface Media {
  id: string
  url: string
  alt?: string
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
}

export interface GalleryData {
  heading: string
  subheading?: string
  topGridImages: { image: Media }[] 
  fullImage1: Media                       
  middleGridImages: { image: Media }[]     
  secondTopGridImages: { image: Media }[]  
  fullImage2: Media                       
  bottomGridImages: { image: Media }[] 
}
