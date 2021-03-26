export default {
  title: 'Brand Colors',
  type: 'object',
  name: 'colorListing',
  fields: [
    {
      type: 'colorlist',
      name: 'colors',
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          {title: 'Primary', value: "#AE6445"},
          {title: 'Secondary', value: "#6F907D"},
          {title: 'Darkest', value: "#293B48"},
          {title: 'Light', value: "#E8E4D9"},
          {title: 'Lightest', value: "#fff"},
        ]
      }
    }
  ]
}