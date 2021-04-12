export default {
  type: 'object',
  name: 'imageGallery',
  title: 'Image Gallery',
  description: 'Add a gallery of images',
  fields: [
    {
      name: 'gallery',
      type: 'array',
      of: [{type: 'illustration'}],
      validation: Rule => Rule.unique(),
      options: {
        layout: 'grid'
      }
    }
  ],
    preview: {
    select: {
      image: 'gallery.0.image'
    },
    prepare({ image }) {
      // if (!image) {
      //   return { title: 'Image Gallery' }
      // }
      return {
        title: `Image Gallery`,
        subtitle: `${image.caption ||
          image.alt ||
          'Missing capton or alt text'} | Size: ${image.size || 'default'}`,
        media: image
      }
    }
  }
}