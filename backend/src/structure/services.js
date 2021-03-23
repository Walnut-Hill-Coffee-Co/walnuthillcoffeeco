import S from '@sanity/desk-tool/structure-builder'
import { GrServices } from 'react-icons/gr'
export default S.listItem().schemaType('service').title('Services').icon(GrServices).child(S.documentTypeList('service'))