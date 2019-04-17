/**
 * Articles component renders a list of articles using data passed in props.
 */

import { css } from '@emotion/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import React from 'react'

import Styles from '../styles/variables'

const articles = css`
  padding: 3rem 3rem 1rem 3rem;
`

const postcount = css`
  font-size: 0.75em;
  font-weight: 300;
  margin: 0 0 1rem 0;
`

const list = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const listitem = css`
  margin: 0 0 ${Styles.layout.spacing} 0;
`

const link = css`
  color: #333;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: ${Styles.colors.highlight};
  }
`

const title = css`
  font-size: 2.5em;
  font-weight: 300;
  margin: 0;
`

const date = css`
  font-size: 0.75em;
  font-style: italic;
`

const excerpt = css`
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0.5em 0 0 0;

  p {
    margin: 0;
  }
`

const Articles = ({ data }) => {
  const { totalCount, edges } = data
  const logEvent = () => {
    ReactGA.event({
      category: 'homepage-article',
      action: 'click',
    })
  }
  return (
    <div css={articles}>
      <h4 css={postcount}>
        {totalCount === 1 ? `${totalCount} Article` : `${totalCount} Articles`}
      </h4>
      <ol css={list}>
        {edges.map(({ node }) => (
          <li css={listitem} key={node.id}>
            <Link
              css={link}
              onClick={logEvent}
              to={node.fields.slug}
            >
              <h3 css={title}>{node.frontmatter.title}</h3>
              <span css={date}>{node.frontmatter.date}</span>
              <div css={excerpt} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Articles
