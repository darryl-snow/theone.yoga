/**
 * Header component renders a header to be displayed at the top of article
 * pages.
 */

import { css } from '@emotion/core'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Services from './services'
import ShareLinks from './share-links'

import Styles from '../styles/variables'

const header = css`
  align-items: center;
  background: ${Styles.colors.background};
  border-bottom: 1px solid ${Styles.colors.borders};
  box-sizing: border-box;
  display: flex;
  left: 0;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 0.5rem 6.5rem;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 3;

  @media (min-width: ${Styles.layout.breakpoint}) {
    position: fixed;
  }
`

const link = css`
  color: ${Styles.colors.text};
  transition: ${Styles.animation.transition};

  &:visited {
    color: ${Styles.colors.text};
  }

  &:active,
  &:focus,
  &:hover {
    color: ${Styles.colors.highlight};
  }
`

const siteTitle = css`
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  margin: 0;
`

const image = css`
  height: 4em;
  left: 1rem;
  top: 1rem;
  transition: ${Styles.animation.transition};
  width: 4em;

  @media (min-width: ${Styles.layout.breakpoint}) {
    height: 5em;
    width: 5em;
  }
`
const servicesList = css`
  display: none;

  @media (min-width: ${Styles.layout.breakpoint}) {
    display: flex;
  }
`

const Header = ({ pageTitle, url }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            services
            title
          }
        }
        huojie: file(relativePath: { eq: "huojie-profile-pic.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const { services, title } = data.site.siteMetadata
      return (
        <div css={header}>
          <Link css={link} title="More about Huo Jie" to="/">
            <h6 css={siteTitle}>{title}</h6>
            <div css={servicesList}>
              {services ? (
                <Services services={services} />
              ) : '' }
            </div>
            <Img
              alt="Huo Jie"
              css={image}
              fluid={data.huojie.childImageSharp.fluid}
              imgStyle={{ border: '1px solid #eee', borderRadius: '100%' }}
              style={{ overflow: 'visible', position: 'absolute' }}
            />
          </Link>
          <ShareLinks title={pageTitle} url={url} />
        </div>
      )
    }}
  />
)

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Header
