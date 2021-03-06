/**
 * ShareLinks component renders a list of ShareLinks using the content passed
 * down in props. The networks to be shared on are hard-coded here.
 */

import { css } from '@emotion/core'
import {
  FaLinkedin, FaFacebook, FaTwitter, FaWeibo,
} from 'react-icons/fa'
import PropTypes from 'prop-types'
import React from 'react'

import Styles from '../styles/variables'

const list = css`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const listItem = css`
  color: ${Styles.colors.text};
  display: block;
  font-size: 1.25em;
  padding: 0.5em;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: ${Styles.colors.highlight};
  }

  svg {
    pointer-events: none;
  }
`

const ShareLinks = (props) => {
  const { title, url } = props
  // const logEvent = (e) => {
  //   const { action, target } = e.target.dataset
  //   return typeof window !== 'undefined' && window.gtag('event', action, {
  //     event_category: target,
  //     event_label: '',
  //     value: '',
  //   })
  // }
  const share = (e) => {
    e.preventDefault()
    // logEvent(e)

    if (typeof window !== 'undefined') {
      window.open(e.target.href, 'sharewindow', 'left=20,top=20,width=600,height=700,toolbar=0,resizable=1')
    }

    return false
  }
  return (
    <ul css={list}>
      <li>
        <a
          aria-label="Share on Facebook"
          css={listItem}
          data-action="click"
          data-target="share-facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          onClick={share}
          title="Share on Facebook"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          aria-label="Share on Twitter"
          css={listItem}
          data-action="click"
          data-target="share-twitter"
          href={`https://twitter.com/home?status=${title} ${url}`}
          onClick={share}
          title="Share on Twitter"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          aria-label="Share on Linkedin"
          css={listItem}
          data-action="click"
          data-target="share-linkedin"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          onClick={share}
          title="Share on Linkedin"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          aria-label="Share on Weibo"
          css={listItem}
          data-action="click"
          data-target="share-weibo"
          href={`http://service.weibo.com/share/share.php?url=${url}&title=${title}`}
          onClick={share}
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
