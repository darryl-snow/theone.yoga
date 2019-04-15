import { css } from '@emotion/core'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import ShareLinks from './share-links'

const header = css`
  align-items: center;
  background: white;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  display: flex;
  left: 0;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 0.5rem 6.5rem;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 3;

  @media (min-width: 47rem) {
    position: fixed;
  }
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
  display: inline-block;
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

  @media (min-width: 47rem) {
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
        <div css={header}>
          <Link css={link} title="More about Huo Jie" to="/">
            <h6 css={siteTitle}>{title}</h6>
            <Img
              alt="Huo Jie"
              css={image}
              fluid={data.huojie.childImageSharp.fluid}
              imgStyle={{ border: '1px solid #eee', borderRadius: '100%' }}
              style={{ overflow: 'visible', position: 'absolute' }}
            />
          </Link>
          <ShareLinks title="test" url="test" />
        </div>
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
