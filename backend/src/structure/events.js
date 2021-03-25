import S from '@sanity/desk-tool/structure-builder'
import { FaCalendarAlt } from 'react-icons/fa'
export default S.listItem().schemaType('event').title('Events').icon(FaCalendarAlt).child(S.documentTypeList('event'))