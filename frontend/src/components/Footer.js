import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaSnapchat } from "react-icons/fa";
import { sanity } from "../../client-config";
import Button from "./Button";
import PortableText from "./PortableText";
import { FooterStyles, MissionStyles } from "./styles/Footer";
import UniversalLink from "./UniversalLink";

const availableIcons = {
  facebook: <FaFacebook />,
  twitter: <AiFillTwitterCircle />,
  linkedin: <FaLinkedin />,
  instagram: <AiFillInstagram />,
  snapchat: <FaSnapchat />,
};
export default function Footer({ isSubmissionConfirmation }) {
  const {
    mission,
    sanitySiteSettings: {
      socialLinks,
      footer: { _rawFooterLogo, _rawAddress, _rawMissionStatement },
    },
  } = useStaticQuery(graphql`
    {
      mission: file(relativePath: { eq: "mission-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sanitySiteSettings(_id: { eq: "siteSettings" }) {
        id
        title
        socialLinks {
          platform
          _key
          url
        }
        footer {
          _rawAddress(resolveReferences: { maxDepth: 10 })
          _rawMissionStatement(resolveReferences: { maxDepth: 10 })
          _rawFooterLogo(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  `);

  const missionImage = getImage(mission);
  const footerLogo = getGatsbyImageData(
    _rawFooterLogo.asset,
    { maxWidth: 300 },
    sanity
  );
  console.log(isSubmissionConfirmation);
  return (
    <>
      {!isSubmissionConfirmation && (
        <MissionStyles>
          <GatsbyImage
            image={missionImage}
            alt="Coffee beans and ground coffee on a wood countertop"
          />
          <div className="mission-content">
            <article>
              <PortableText blocks={_rawMissionStatement} />
            </article>
          </div>
        </MissionStyles>
      )}
      <FooterStyles>
        <div className="inner-content">
          <GatsbyImage image={footerLogo} alt="" />
          <div className="social-box">
            <h5>Follow us.</h5>
            <div className="social-icons">
              {socialLinks &&
                socialLinks.map(({ platform, url, _key }) => (
                  <UniversalLink key={_key} to={url}>
                    {availableIcons[platform]}
                  </UniversalLink>
                ))}
            </div>
          </div>
          <div className="contact-box">
            <h5>Get in touch.</h5>
            <Button buttonStyle="orange" to="/contact/">
              Contact us
            </Button>
            <div style={{marginTop: `2rem`}}>
              <a style={{color: `var(--white)`}} href="tel:+1-931-313-5472">931-313-5472</a>
            </div>
            <PortableText blocks={_rawAddress} />
          </div>
        </div>
      </FooterStyles>
    </>
  );
}
