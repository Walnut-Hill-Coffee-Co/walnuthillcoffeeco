import React from 'react'
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineLink } from 'react-icons/ai'

export default {
  name: 'bodyPortableText',
  type: 'array',
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
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Align Center', value: 'center', blockEditor: {
            icon: () => <AiOutlineAlignCenter />,
            render: (props) => <span style={{textAlign: `center`, display: 'block'}}>{props.children}</span>
          }},
          {title: 'Align Left', value: 'left', blockEditor: {
            icon: () =><AiOutlineAlignLeft />,
            render: (props) => <span style={{textAlign: `left`,display: 'block'}}>{props.children}</span>
          }},
          {title: 'Align Right', value: 'right', blockEditor: {
            icon: () =><AiOutlineAlignRight />,
            render: (props) => <span style={{textAlign: `right`,display: 'block'}}>{props.children}</span>
          }},
        ]
      }
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