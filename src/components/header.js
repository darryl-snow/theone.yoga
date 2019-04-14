import { css } from '@emotion/core'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1rem 1.5rem 1rem 6.5rem;
  position: relative;
`

const link = css`
  color: #444;
  transition: 0.2s all ease-in-out;

  &:visited {
    color: #444;
  }

  &:active,
  &:focus,
  &:hover {
    color: #b189ba;
  }
`

const siteTitle = css`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
`

const image = css`
  height: 4em;
  left: 1rem;
  top: 1rem;
  transition: 0.2s all ease-in-out;
  width: 4em;

  @media (min-width: 47em) {
    height: 5em;
    width: 5em;
  }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
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
      const { title } = data.site.siteMetadata
      return (
        <Link css={link} to="/">
          <div css={header}>
            <h6 css={siteTitle}>{title}</h6>
            <Img
              alt="Huo Jie"
              css={image}
              fluid={data.huojie.childImageSharp.fluid}
              imgStyle={{ border: '1px solid #eee', borderRadius: '100%' }}
              style={{ overflow: 'visible', position: 'absolute' }}
            />
          </div>
        </Link>
      )
    }}
  />
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
