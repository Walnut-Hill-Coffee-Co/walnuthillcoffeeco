import React from "react";
import BodySection from "./pagebuilder-parts/BodySection";
import Content from "./pagebuilder-parts/Content";
import GridContent from "./pagebuilder-parts/GridContent";
import Hero from "./pagebuilder-parts/Hero";
import UiComponent from "./pagebuilder-parts/UiComponent";

export default function AllLayouts({ layoutData, location }) {
  const layoutType = layoutData.__typename;
  console.log(layoutType)
  /**
   * Default Component
   */
  const Default = () => (
    <div>
      In AllLayouts, the mapping of this component is missing: {layoutType}
    </div>
  );

  /**
   * mapping the typenames to our components
   */

  const layouts = {
    SanityHero: Hero,
    SanityGridContent: GridContent,
    SanityBodySection: BodySection,
    SanityContent: Content,
    SanityUiComponentRef: UiComponent,
    page_default: Default
  }

  /**
   * If layout type is not existing in our mapping, it shows our Default layout component
   */
  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts["page_default"]
  return <ComponentTag location={location} {...layoutData} />
}
