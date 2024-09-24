'use client'

import Image, { ImageLoader } from 'next/image'

const NextImage = ({
  url,
  alt,
  width,
  height,
  layout,
  priority = false,
}: {
  url: string
  alt?: string
  width?: number
  height?: number
  layout?: string
  priority?: boolean
}) => {
  return (
    <Image
      src={url}
      alt={alt || 'Image'}
      {...(layout
        ? { layout }
        : {
            width,
            height,
          })}
      loader={vercelBlobLoader}
      objectFit="center"
      priority={priority}
    />
  )
}

// Custom loader function for Vercel Blob
const vercelBlobLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default NextImage
