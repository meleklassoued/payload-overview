import type { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'Title',
    defaultColumns: ['Title', 'Description', 'ProductImage'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Description',
      type: 'text',
      required: true,
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
