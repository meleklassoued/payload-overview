import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Payload Website Template',
  title: 'Payload Website Template',
  description: 'An open-source website built with Payload and Next.js.',
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/media/image-1`,
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
