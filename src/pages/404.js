/**
 * This is the 404 page. It is rendered whenever the user attempts to access
 * an unknown route. It randomly picks an Iyengar quote to display.
 */

import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'

import Styles from '../styles/variables'

const background = css`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const container = css`
  align-items: center;
  background: rgba(0,0,0,0.25);
  box-shadow: inset 0 0 30vw black;
  color: ${Styles.colors.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 5vh 15vw;
  text-align: center;
`

const quote = css`
  font-size: 3em;
  text-shadow: 0 0 0.15em white;
`

const link = css`
  background-color: ${Styles.colors.highlight};
  border: none;
  border-radius: 0.15em;
  box-shadow: none;
  color: ${Styles.colors.background};
  cursor: pointer;
  margin-top: 1.5rem;
  opacity: 0.75;
  padding: 0.75em;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    opacity: 1;
  }
`

const quoteGenerator = () => {
  const quotes = [
    'My Body Is My Temple And Asanas Are My Prayers',
    'Yoga teaches us to cure what need not be endured and endure what cannot be cured.',
    'Action is movement with intelligence. The world is filled with movement. What the world needs is more conscious movement, more action.',
    'Yoga is like music. The rhythm of the body, the melody of the mind, and the harmony of the soul creates the symphony of life.',
    'Yoga does not just change the way we see things, it transforms the person who sees.',
    'It is through the alignment of the body that I discovered the alignment of my mind, self, and intelligence.',
    'Breath is the king of mind.',
    'Yoga allows you to find a new kind of freedom that you may not have known even existed.',
    'Yoga allows you to rediscover a sense of wholeness in your life, where you do not feel like you are constantly trying to fit broken pieces together.',
    'Yoga is a light, which once lit, will never dim. The better your practice, the brighter the flame.',
    'There is no difference in souls, only the ideas about ourselves that we wear.',
    'Be inspired but not proud.',
    'The hardness of a diamond is part of its usefulness, but its true value is in the light that shines through it.',
  ]
  return quotes[Math.ceil(Math.random() * quotes.length - 1)]
}

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "huojie-yoga-pose.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          css={background}
          fluid={imageData}
          Tag="div"
        >
          <SEO robots="noindex" title="404: Not found" />
          <div css={container}>
            <h1 css={quote}>{quoteGenerator()}</h1>
            <p>Looks like you&#39;re a bit lost&hellip;</p>
            <Link css={link} to="/">Try the home page</Link>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default NotFoundPage
