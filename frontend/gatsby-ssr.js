import React from 'react';

const HeadComponents = [<link key="font-families" rel="stylesheet" href="https://use.typekit.net/hvl1pyo.css" />];

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents);
};

export {wrapRootElement} from './gatsby-browser'
