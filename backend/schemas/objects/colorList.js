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
          {title: 'tan', value: "#AE6445"},
          {title: 'green', value: "#6F907D"},
          {title: 'blue', value: "#293B48"},
          {title: 'black', value: "#090C08"},
          {title: 'lightGrey', value: "#E8E4D9"},
          {title: 'white', value: "#fff"},
        ]
      }
    }
  ]
}