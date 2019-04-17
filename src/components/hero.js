/**
 * Hero component renders a hero image with a title overlaid.
 */

import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

import Styles from '../styles/variables'

const container = css`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  margin-top: 0;
  overflow: hidden;

  @media (min-width: ${Styles.layout.breakpoint}) {
    margin-top: 2em;
  }
`

const heading = css`
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  box-shadow: inset 0 0 30vw black;
  box-sizing: border-box;
  color: ${Styles.colors.background};
  display: flex;
  font-size: 3em;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 5vh 15vw;
  text-align: center;
  text-shadow: 0 0 0.15em white;
  width: 100%;
`

const Hero = ({ image, title }) => {
  const imageData = image.childImageSharp.fluid ? image.childImageSharp.fluid : image.publicURL

  return (
    <BackgroundImage
      css={container}
      fluid={imageData}
      Tag="div"
    >
      <h1 css={heading}>{title}</h1>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default Hero
