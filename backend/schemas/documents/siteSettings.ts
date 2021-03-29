export default {
  type: 'document',
  name: 'siteSettings',
  title: 'Site Settings',
  liveEdit: 'true',
  __experimental_actions: ['update', 'publish'],
  fields: [

    {
      type: 'string',
      name: 'title',
      title: 'Site Title',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph',
    },
    {
      title: 'Social Media Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }]
    },
    {
      title: 'Header Logo',
      type: 'mainImage',
      name: 'headerLogo'
    },
    {
      title: 'Footer',
      type: 'footer',
      name: 'footer',
    },
  ]
}