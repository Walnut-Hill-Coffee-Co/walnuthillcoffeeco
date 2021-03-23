// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import navMenu from './documents/navMenu'
import page from './documents/page'
import route from './documents/route'
import service from './documents/service'
import siteSettings from './documents/siteSettings'
import linkCreator from './objects/linkCreator'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import socialLink from './objects/socialLink'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    socialLink,
    openGraph,
    mainImage,
    page,
    navMenu,
    route,
    linkCreator,
    service

  ]),
})
