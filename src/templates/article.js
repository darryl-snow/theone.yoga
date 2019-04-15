import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ContactForm from '../components/contact-form'
import Header from '../components/header'
import Seo from '../components/seo'
import ShareLinks from '../components/share-links'

const container = css`
  margin: 2rem auto 0 auto;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
  width: 85%;

  @media (min-width: 47rem) {
    margin: 4rem auto 2rem auto;
    width: 75%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5em 0;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin: 0 0 0.75em 0;
    transition: 0.2s all ease-in-out;

    @media (min-width: 47rem) {
      font-size: 3em;
      margin: 0.75em 0;
    }
  }

  p,
  ol,
  ul {
    font-size: 1.25em;
    line-height: 1.5em;
    margin: 1em auto;
    max-width: 80ch;
  }

  li {
    margin: 0.5em 0;
  }
`

const shareLinks = css`
  @media (min-width: 47rem) {
    display: none;
  }
`

const Article = ({ data }) => {
  const post = data.markdownRemark
  const { slug, title } = post.frontmatter
  const url = `https://theone.yoga/${slug}/`
  return (
    <React.Fragment>
      <Seo title={`${title} | Huo Jie`} />
      <Header pageTitle={title} url={url} />
      <div css={container}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div css={shareLinks}>
          <ShareLinks title={title} url={url} />
        </div>
      </div>
      <ContactForm page="article" />
    </React.Fragment>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        slug
        title
      }
    }
  }
`

export default Article
