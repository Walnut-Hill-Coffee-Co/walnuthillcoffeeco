import React from "react";
import Button from "../Button";
import Figure from "../Figure";
import PortableText from "../PortableText";
import { HeroStyles } from "../styles/HeroStyles";

export default function Hero(props) {
  if(!props?._rawIllustration?.image) {
    return null
  }

  return (
    <>
      <HeroStyles>
        <Figure loading="eager" node={props?._rawIllustration?.image} />
        {/* <GatsbyImage image={image} loading="eager" alt="friends enjoying coffee" /> */}
        <div className="inner-content">
          {props?._rawHeading && (
            <h1>
              <PortableText blocks={props?._rawHeading} />
            </h1>
          )}
          {props?._rawCta?.kind === "button" && props?._rawCta?.link && (
            <Button size="small" to={props?._rawCta.link} type="button" buttonStyle={props?._rawCta?.backgroundColor?.colors?.title} style={{backgroundColor: props?._rawCta?.backgroundColor?.colors?.value}}>
              View Menu
            </Button>
          )}
        </div>
      </HeroStyles>

    </>
  );
}
