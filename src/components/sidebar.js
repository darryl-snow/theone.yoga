/**
 * Sidebar component takes props and renders them.
 */

import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import {
  FaEnvelope, FaIdCard, FaLinkedin, FaMobileAlt, FaWeixin,
} from 'react-icons/fa'
import { graphql, StaticQuery } from 'gatsby'

const wrapper = css`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  min-height: 50vh;
  padding: 1.5rem;
  text-align: center;

  @media (min-width: 47em) {
    text-align: left;
  }
`

const heading = css`
  font-size: 4em;
  margin: 0;
`

const paragraph = css`
  font-size: 1.25em;
  margin: 0.5em 0;
`

const list = css`
  display: flex;
  font-size: 1.25em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: 47em) {
    justify-content: flex-start;
  }

  li:first-of-type a {
    margin-left: 0;
  }

  li:last-of-type a {
    margin-right: 0;
  }
`

const listIcon = css`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  color: #222;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  height: 1.5em;
  justify-content: center;
  margin: 0.25em;
  padding: 0.25em;
  opacity: 0.5;
  transition: 0.2s all ease-in-out;
  width: 1.5em;

  &:active,
  &:focus,
  &:hover {
    color: #b189ba;
    opacity: 1;
  }

  @media (min-width: 47em) {
    font-size: 1em;
    height: 1em;
    padding: 0.5em;
    width: 1em;
  }
`

const Sidebar = (props) => {
  const {
    description, email, linkedin, phone, title, wechat,
  } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "huojie.jpeg" }) {
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
            fluid={imageData}
            Tag="aside"
          >
            <div css={wrapper}>
              <h1 css={heading}>{title}</h1>
              <p css={paragraph}>{description}</p>
              <ul css={list}>
                <li>
                  <a
                    aria-label="Phone me"
                    css={listIcon}
                    href={`tel:${phone}`}
                  >
                    <FaMobileAlt aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Email me"
                    css={listIcon}
                    href={`mailto:${email}`}
                  >
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Go to my Linkedin"
                    css={listIcon}
                    href={linkedin}
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Add me on WeChat"
                    css={listIcon}
                    href={wechat}
                  >
                    <FaWeixin />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Download my resume (PDF)"
                    css={listIcon}
                    download="HuoJie-Resume.pdf"
                    href="../images/resume.pdf"
                  >
                    <FaIdCard />
                  </a>
                </li>
              </ul>
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wechat: PropTypes.string.isRequired,
}

export default Sidebar
