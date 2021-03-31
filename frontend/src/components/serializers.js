import SanityBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Button from './Button'
import Figure from './Figure'
import UniversalLink from './UniversalLink'

const BlockRenderer = props => {
  const {style = 'normal'} = props.node
  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return React.createElement(style, { className: `heading-${level}`}, props.children)
  }

  console.log({props})

  // Fall back to default handling
  return SanityBlockContent.defaultSerializers.types.block(props)
}

const serializers = {
  marks: {
    link: props => {
      return <UniversalLink to={props.mark.href}>{props.children}</UniversalLink>
    },
    center: props => {
      return <span style={{display: 'block',textAlign: `center`, margin:`0 auto`}}>{props.children}</span>
    }
  },
  types: {
    block: BlockRenderer,
    linkCreator: ({node}) => {
      const path = node?.sitePageRoute?.slug?.current || node?.link
      if(node.kind === 'link') {
        return <UniversalLink to={path}>{node.title}</UniversalLink>
      }
      return <Button to={path} buttonStyle={node.backgroundColor.colors.title} style={{backgroundColor: node.backgroundColor.colors.value}}>{node.title}</Button>
    } ,
    mainImage: Figure
  }
}

export default serializers