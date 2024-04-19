import type { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
    },
    {
      name: 'Description',
      type: 'text',
    },
    {
      name: 'ProductImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'Price',
      type: 'number',
    },
  ],
}

export default Products
