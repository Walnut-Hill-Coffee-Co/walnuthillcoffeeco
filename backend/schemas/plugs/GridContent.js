import { FaColumns } from 'react-icons/fa';
export default {
  name: "gridContent",
  title: "Grid Content",
  type: "object",
  icon: FaColumns,
  fields: [
    {
      name: "columns",
      type: "array",
      options: {
        sortable: "true",
        // layout: "grid",
        editModal: "fullscreen",
      },
      title: "Columns",
      of: [{ type: "singleColumn" }, {type: 'illustration'}],
      validation: Rule => Rule.required().min(2, 'To use the Grid Content block, you must have at least 2 columns').max(4, 'You can not have more than 4 columns in this layout')
    },
  ],
  preview: {
    select: {
      title: 'columns',
    },
    prepare: ({title}) => {
      return {
        title: 'Grid Content'
      }
    }
  }
};
