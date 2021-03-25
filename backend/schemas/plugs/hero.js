import { BsCardHeading } from 'react-icons/bs'
export default {
  type: 'object',
  name: 'hero',
  icon: BsCardHeading,
  title: 'Hero',
  fields: [
    // {
    //   name: 'label',
    //   type: 'string',
    //   description: 'an optional description of the block'
    // },
    {
      name: 'heading',
      type: 'simpleBlockContent',
      description: 'Optional tagline'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'linkCreator'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled',
      media: 'illustration'

    },
    prepare({ media, title, disabled }) {
      return {
        media: media ? media : '',
        title: `Hero: ${disabled ? 'DISABLED' : title}`,
      }
    }
  }
}