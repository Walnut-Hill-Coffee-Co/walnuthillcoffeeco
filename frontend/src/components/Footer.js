import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaSnapchat } from "react-icons/fa";
import Button from "./Button";
import Figure from "./Figure";
import PortableText from "./PortableText";
import UniversalLink from "./UniversalLink";

const MissionStyles = styled.section`
  min-height: 70vh;
  margin-top: 10rem;
  position: relative;
  background: rgba(0, 0, 0, 0.4);

  > .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  > .mission-content {
    min-height: 70vh;
    position: relative;
    width: 100%;
    color: white;
    justify-content: center;
    max-width: var(--maxWidth);
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      padding: 4rem;
    }

    > article {
      align-self: flex-start;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: var(--bs);
      max-width: 40rem;

      h2 {
        margin: 0;
      }
    }

    > div {
      padding: 2rem;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: var(--lineHeight);

      h5 {
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 1rem;
      }
      p {
        margin: 0;
      }
    }
  }
`;
const FooterStyles = styled.footer`
  padding-top: 10vh;
  padding-bottom: 5vh;
  background-color: var(--black);
  > .inner-content {
    width: 90%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    color: white;
    display: grid;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 16rem;
    }
    h5 {
      margin: 0;
      /* text-transform: uppercase; */
      letter-spacing: 1px;
      text-align: center;
    }

    @media all and (min-width: 768px) {
      align-items: flex-start;
    }

    .social-icons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      a {
        display: flex;
        align-items: center;
        font-size: 3rem;
        color: var(--lightGray);
      }
    }

    .contact-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        margin-top: 0;
        margin-bottom: 2rem;
      }
      p {
      }
      a {
        margin: auto;
        display: block;
      }

      /* @media all and (min-width: 768px) {
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
        h5 {
          width: 100%;
          margin-top: 0;
        }
      } */
    }
  }
`;
const availableIcons = {
  facebook: <FaFacebook />,
  twitter: <AiFillTwitterCircle />,
  linkedin: <FaLinkedin />,
  instagram: <AiFillInstagram />,
  snapchat: <FaSnapchat />,
};
export default function Footer() {
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

  const missionImage = getImage(mission)

  return (
    <>
      <MissionStyles>
        <GatsbyImage image={missionImage} alt="Coffee beans and ground coffee on a wood countertop" />
        <div className="mission-content">
          <article>
            <PortableText blocks={_rawMissionStatement} />
          </article>
        </div>
      </MissionStyles>
      <FooterStyles>
        <div className="inner-content">
          <Figure node={_rawFooterLogo} />
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
            <Button buttonStyle="primary" to="/contact/">Contact us</Button>
            <PortableText blocks={_rawAddress} />
          </div>
        </div>
      </FooterStyles>
    </>
  );
}
