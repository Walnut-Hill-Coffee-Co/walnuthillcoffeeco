import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export const Container = styled.div`
  width: 90%;
  max-width: var(--maxWidth);
  margin: 0 auto;

  > p {
    margin-top: 0;
    margin-bottom: 20rem;
    max-width: 90ch;
    margin-right: auto;

    @media screen and (min-width: 768px) {
      max-width: 65ch;
    }
  }

  .store-hours {
    /* background: red; */
    padding: 20vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-top: 0;
      letter-spacing: 1px;
    }
    p {
      margin: 0;
    }
  }
`;
const StyledH1 = styled.h1`
  margin-top: 15rem;
  text-align: left;
`;

const ServicesStyles = styled.section`
  margin: 6rem auto;
  display: grid;
  column-gap: 4rem;
  row-gap: 40vh;
  h2 {
    margin: 0;
    line-height: calc(var(--lineHeight) / 1.5);
  }
  p {
    margin: 2rem 0;

    max-width: 100ch;
  }
  .full-width {
    min-height: 60vh;
    grid-column: 1/-1;
    display: grid;

    .photo {
      align-items: stretch;
    }

    .content {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }
  }

  .single-column {
    display: grid;
    grid-gap: 2rem;

    .photo {
      width: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      p {
        flex: 1;
      }
      a {
        display: inline-block;
      }
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    .full-width {
      grid-template-columns: 1fr 1fr;

      .content {
        padding-left: 4rem;
        margin: 0;
      }

      &:nth-child(even) {
        .content {
          padding: 0;
          padding-right: 4rem;
        }
      }
    }
  }
`;

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

const AboutStyles = styled.section`
  padding: 20vh 0;

  p {
    margin: unset;
    max-width: 60ch;
    margin-bottom: 3rem;
  }
  > div {
    display: grid;
    grid-gap: 4rem;
    align-items: center;
    @media screen and (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-auto-rows: max-content;
      row-gap: 0;

      > .content {
        display: grid;
        align-items: center;
      }
      .team-photo {
        grid-column: 2;
        align-self: stretch;
      }
    }

    h2 {
      margin-top: 0;
      grid-column: 1 / span 1;
    }

    a {
      display: inline-block;
    }
  }
`;
export default function IndexPage() {
  const { mission, coffeeTruck, menu, venue, merch, flowers, team } = useStaticQuery(
    graphql`
      query {
        mission: file(relativePath: { eq: "mission-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        coffeeTruck: file(relativePath: { eq: "coffee-truck.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        menu: file(relativePath: { eq: "food.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.78, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        venue: file(relativePath: { eq: "venue.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 600, aspectRatio: 1.78, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        merch: file(relativePath: { eq: "merch.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        flowers: file(relativePath: { eq: "flowers.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        team: file(relativePath: { eq: "team.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const missionImage = getImage(mission);
  const coffeeTruckImage = getImage(coffeeTruck);
  const menuImage = getImage(menu);
  const venueImage = getImage(venue);
  const merchImage = getImage(merch);
  const flowerImage = getImage(flowers);
  const teamImage = getImage(team);
  return (
    <Layout>
      <Hero />
      <Container>
        <StyledH1>This is home.</StyledH1>
        <p>
          The heartbeat of Walnut Hill Coffee Company is for the community. We strive to capture the essence of all that
          is good to bring you a welcoming, eclectic atmosphere paired with an unforgettable coffee house experience.
        </p>

        <ServicesStyles>
          <article className="full-width">
            <GatsbyImage className="photo" image={coffeeTruckImage} alt="coffee truck" height={500} />

            <div className="content">
              <h2>
                Coffee <br /> on the run.
              </h2>
              <p>
                The little white truck that started it all. <br /> Find out where we'll be next!
              </p>
              <Button buttonStyle="dark">See Schedule</Button>
            </div>
          </article>
          <article className="full-width">
            <div className="content">
              <h2>
                Blooms to <br />
                brighten your day.
              </h2>
              <p>
                Come shop our selection of locally grown cut flowers. <br />
                Available in our shop each week.
              </p>
              <Button buttonStyle="dark">Learn more</Button>
            </div>
            <GatsbyImage className="photo" image={flowerImage} alt="fresh cut flowers" height={500} />
          </article>
          <article className="full-width">
            <GatsbyImage className="photo" image={merchImage} alt="walnut hill coffee co merch" height={500} />

            <div className="content">
              <h2>
                Stay foxy <br /> with new merch.
              </h2>
              <p>
                Check out our latest t-shirts, <br />
                sweatshirts, mugs, coffee & more.
              </p>
              <Button buttonStyle="dark">Shop now</Button>
            </div>
          </article>
          <article className="single-column">
            <div className="photo">
              <GatsbyImage image={menuImage} aspectRatio={1.78} width={400} />
            </div>

            <div className="content">
              <h2>What's on the menu?</h2>
              <p>
                Take a look at our rotating seasonal <br /> food & beverage options.
              </p>
              <Button buttonStyle="dark">View menu</Button>
            </div>
          </article>
          <article className="single-column">
            <div className="photo">
              <GatsbyImage image={venueImage} aspectRatio={1.78} width={400} />
            </div>

            <div className="content">
              <h2>
                Our home is your home.
              </h2>
              <p>We love a good get-together. Our space is available for parties and events of all kinds.</p>
              <Button buttonStyle="dark">Reserve now</Button>
            </div>
          </article>
        </ServicesStyles>
      </Container>
      <Container>
        <div className="store-hours">
          <h3>Operating hours.</h3>
          <p>
            <strong>Monday - Friday:</strong> 8AM - 5PM
          </p>
          <p>
            <strong>Saturday:</strong> 8AM - 7PM
          </p>
        </div>
      </Container>
      <AboutStyles>
        <Container>
          <div className="content">
            <h2>Who are we?</h2>
            <p>
              Our journey began in a little white truck, summer of 2019, as homegrown baristas with wild dreams and
              little experience. Passionate about good coffee, good food, and good company, we are here to create and
              share with our hometown.
            </p>
            <Button buttonStyle="dark">Learn our Story</Button>
          </div>
          <GatsbyImage className="team-photo" image={teamImage} alt="Crista Rogers" />
        </Container>
      </AboutStyles>
      <MissionStyles>
        <GatsbyImage image={missionImage} alt="Coffee beans and ground coffee on a wood countertop" />
        <div className="mission-content">
          <article>
            <h2>Our mission.</h2>
            <p>
              At Walnut Hill Coffee Co., our goal is simple: serving others well. Impacting both guests and co-workers
              positively through cultivating conversation and connection day to day.{' '}
            </p>
          </article>
        </div>
      </MissionStyles>
    </Layout>
  );
}
