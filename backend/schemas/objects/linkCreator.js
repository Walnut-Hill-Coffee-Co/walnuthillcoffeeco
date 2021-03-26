import React from 'react'

export default {
  title: 'Link',
  name: 'linkCreator',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Site page',
      name: 'sitePageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'route' }, {type: 'service'}, {type: 'page'}, {type: 'event'}]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link']
      }
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'colorList'
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'sitePageRoute',
      route: 'route',
      link: 'link',
      backgroundColor: 'backgroundColor.colors.value'
    },
    prepare({ title, landingPage,backgroundColor, route, link }) {
      let subtitle = 'Not set'

      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle,
        media: <div style={{backgroundColor, height: `100%`, borderRadius: `100%`}} />
      }
    }
  }
}