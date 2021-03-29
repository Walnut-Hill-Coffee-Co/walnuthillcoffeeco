export default {
  title: 'Footer',
  type: 'object',
  name: 'footer',
  fieldsets: [{name: 'content', title: 'Content', options: {collapsible: true, collapsed: false, columns: 2}}],
  fields: [
    {
      title: 'Mission Statement',
      name: 'missionStatement',
      type: 'bodyPortableText',
      fieldset: 'content'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'simpleBlockContent',
      fieldset: 'content'

    },
    {
      title: 'Logo',
      type: 'mainImage',
      name: 'footerLogo',
      fieldset: 'content'
    },
  ]
};