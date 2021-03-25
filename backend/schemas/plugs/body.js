

export default {
  name: 'bodySection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {name: 'content', type: 'bodyPortableText'}
  ],
  preview: {
    select: {
      title: 'content.0',
      subtitle: 'content.0',
    },
    prepare: ({subtitle, media, title}) => {
      if(subtitle._type === 'mainImage') {
        return {
          title: 'Content',
          media: subtitle
        }
      } else {
        const text = subtitle?.children[0]?.text || ""
        const subText = text.length > 70 ? `${text.substring(0,67)}...`: text
        return {
          title: 'Content',
          subtitle: subtitle ? subText : ''
        }
      }
    }
  }
}