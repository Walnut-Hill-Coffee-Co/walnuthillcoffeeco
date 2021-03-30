import React from 'react'
import Button from './Button'
import Figure from './Figure'
import UniversalLink from './UniversalLink'


const serializers = {
  marks: {
    link: props => {
      return <UniversalLink to={props.mark.href}>{props.children}</UniversalLink>
    }
  },
  types: {
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