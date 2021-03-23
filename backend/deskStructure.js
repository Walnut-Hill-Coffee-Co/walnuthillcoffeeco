import S from "@sanity/desk-tool/structure-builder";
import { FcHome } from "react-icons/fc";
import { GoSettings } from "react-icons/go";
import landingPages from './src/structure/landingPages';
const hiddenDocTypes = (listItem) => {
  ![
    "route",
    "navigationMenu",
    "post",
    "page",
    "siteSettings",
    "author",
    "category",
  ].includes(listItem.getId());
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("siteSettings")
        .title("Site Settings")
        .id("siteSettings")
        .icon(GoSettings)
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.documentListItem()
        .title('Home Page')
        .schemaType('page')
        .icon(FcHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('homePage')
        ),
      landingPages,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
