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
import Img from 'gatsby-image'

const wrapper = css`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  min-height: 50vh;
  padding: 1.5rem;
  position: relative;
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

const modal = css`
  align-items: top;
  background: rgba(255,255,255,0.75);
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  padding: 3rem;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: 0.2s all ease-in-out;
  width: 100%;
  z-index: 2;

  &.is-shown {
    pointer-events: auto;
    opacity: 1;
  }
`

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.modal = React.createRef()

    this.state = {
      modalOpen: false,
    }
  }

  toggleModal = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }))
  }

  render() {
    const {
      description, email, linkedin, phone, title, wechat,
    } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            background: file(relativePath: { eq: "huojie.jpeg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            wechat: file(relativePath: { eq: "huojie-wechat.jpeg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 752) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={(data) => {
          const imageData = data.background.childImageSharp.fluid
          const { modalOpen } = this.state
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
                      title="Phone me"
                    >
                      <FaMobileAlt aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Email me"
                      css={listIcon}
                      href={`mailto:${email}`}
                      title="Email me"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Go to my Linkedin"
                      css={listIcon}
                      href={linkedin}
                      title="Go to my Linkedin"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Add me on WeChat"
                      css={listIcon}
                      href={wechat}
                      onClick={this.toggleModal}
                      title="Add me on WeChat"
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
                      title="Download my resume (PDF)"
                    >
                      <FaIdCard />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={modalOpen ? 'is-shown' : ''}
                css={modal}
                onClick={this.toggleModal}
                onKeyPress={this.toggleModal}
                ref={this.modal}
                role="button"
                tabIndex="0"
              >
                <Img
                  alt="My WeChat QR code"
                  fluid={data.wechat.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                  objectFit="contain"
                  style={{ width: '50%' }}
                />
              </div>
            </BackgroundImage>
          )
        }}
      />
    )
  }
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
