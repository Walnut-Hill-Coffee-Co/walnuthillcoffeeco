import { AiOutlineLink } from 'react-icons/ai'
export default {
  name: 'bodyPortableText',
  type: 'array',
  editModal: 'fullscreen',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Primary Button', value: 'primaryButton' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' }
      ],
    },
    {
      type: 'mainImage',
      options: {
        hotspot: true
      }
    },
    {
      type: 'linkCreator',
      title: 'Button',
      icon: AiOutlineLink
    }

  ]
}