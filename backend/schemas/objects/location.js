export default {
  name: 'location',
  type: 'object',
  title: 'Location Info',
  fieldsets: [{name: 'location', options: {collapsible: false,columns: 2}}],
  fields: [
    {
      title: 'Location Name',
      name: 'name',
      type: 'string',
      fieldset: 'location',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address Line 1',
      name: 'address1',
      type: 'string',
      fieldset: 'location'
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      fieldset: 'location'
    },
    {
      title: 'State',
      name: 'state',
      type: 'string',
      fieldset: 'location'
    }
  ]
}