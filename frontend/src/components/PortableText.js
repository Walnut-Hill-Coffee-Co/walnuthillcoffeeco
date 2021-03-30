import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import clientConfig from "../../client-config"
import serializers from "./serializers"

export default function PortableText({ blocks, className="portable-text" }){
  return(
    <BaseBlockContent
      className={className}
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}
