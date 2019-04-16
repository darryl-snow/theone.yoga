/**
 * Articles component renders a list of articles using data passed in props.
 */

import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

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
  margin: 0 0 3rem 0;
`

const link = css`
  color: #333;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: #b189ba;
  }
`

const title = css`
  font-size: 3em;
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
