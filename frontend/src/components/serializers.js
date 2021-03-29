import React from 'react'
import Figure from './Figure'
import UniversalLink from './UniversalLink'


const serializers = {
  marks: {
    link: props => {
      return <UniversalLink to={props.mark.href}>{props.children}</UniversalLink>
    }
  },
  types: {
    mainImage: Figure
  }
}

export default serializers