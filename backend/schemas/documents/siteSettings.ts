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
      type: 'color',
      name: 'primaryColor',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc.'
    },
    {
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color for websites, press materials, etc.'
    },
    {
      title: 'Social Media Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }]
    }
  ]
}