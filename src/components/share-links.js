import { css } from '@emotion/core'
import {
  FaLinkedin, FaFacebook, FaTwitter, FaWeibo,
} from 'react-icons/fa'
import PropTypes from 'prop-types'
import React from 'react'

const list = css`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const listItem = css`
  color: #444;
  display: block;
  font-size: 1.25em;
  padding: 0.5em;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: #b189ba;
  }
`

const ShareLinks = (props) => {
  const { title, url } = props
  return (
    <ul css={list}>
      <li>
        <a
          css={listItem}
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          title="Share on Facebook"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          css={listItem}
          href={`https://twitter.com/home?status=${title} ${url}`}
          title="Share on Twitter"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          css={listItem}
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          title="Share on Linkedin"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          css={listItem}
          href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}
          title="Share on Weibo"
        >
          <FaWeibo />
        </a>
      </li>
    </ul>
  )
}

ShareLinks.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ShareLinks
