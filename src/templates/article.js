/**
 * Article component renders an article based on a markdown file. It relies on
 * a graphql query that fetches all markdown files.
 */

import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ContactForm from '../components/contact-form'
import Header from '../components/header'
import Hero from '../components/hero'
import Seo from '../components/seo'
import ShareLinks from '../components/share-links'

import Styles from '../styles/variables'

const container = css`
  font-size: 1.25em;
  margin: 2rem auto 0 auto;
  max-width: 80ch;
  overflow: hidden;
  transition: ${Styles.animation.transition};
  width: 85%;

  @media (min-width: ${Styles.layout.breakpoint}) {
    margin: 2rem auto 2rem auto;
    width: 75%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${Styles.layout.spacing} 0;
    text-align: center;
    transition: ${Styles.animation.transition};
  }

  h1 {
    font-size: 1.6em;
    margin: 0 0 0.5em 0;
    transition: ${Styles.animation.transition};

    @media (min-width: ${Styles.layout.breakpoint}) {
      font-size: 2.4em;
      margin: 4rem 0 0.25em 0;
    }
  }

  p,
  ol,
  ul {
    line-height: 1.5em;
    margin: 1em auto;
    max-width: 80ch;
  }

  li {
    margin: 0.5em 0;
  }

  blockquote {
    background: ${Styles.colors.backgroundAlt};
    border-radius: 3px;
    font-size: 1.25em;
    font-style: italic;
    margin: 1rem auto 2rem auto;
    padding: 0.3em;
    position: relative;
    text-align: center;
    width: 80%;

    &:before,
    &:after {
      background: none;
      color: ${Styles.colors.backgroundAlt};
      font-size: 4em;
      position: absolute;
      top: 15%;
    }

    &:before {
      content: '“';
      margin-right: 0.35em;
      right: 100%;
    }

    &:after {
      content: '”';
      left: 100%;
    }
  }

  table {
    background: transparent;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-bottom: ${Styles.layout.spacing};
    max-width: 100%;
    width: 100%;
  }

  thead th {
    border-bottom: 2px solid ${Styles.colors.borders};
    text-align: left;
  }

  th {
    border-top: 1px solid ${Styles.colors.borders};
    font-weight: 600;
    padding: 0.75em;
    vertical-align: bottom;
  }

  td {
    border-top: 1px solid ${Styles.colors.borders};
    padding: 0.75em;
    vertical-align: bottom;
  }

  .embed-container {
    height: 0;
    margin-bottom: ${Styles.layout.spacing};
    max-width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const meta = css`
  border-bottom: 1px solid ${Styles.colors.borders};
  border-top: 1px solid ${Styles.colors.borders};
  display: flex;
  font-size: 0.65em;
  font-style: italic;
  justify-content: space-evenly;
  margin: 0;
  padding: 1em 0;
  text-align: center;
`

const shareLinks = css`
  @media (min-width: ${Styles.layout.breakpoint}) {
    display: none;
  }
`

const Article = ({ data }) => {
  const post = data.markdownRemark
  const {
    date, lang, hero, title,
  } = post.frontmatter
  const url = `https://theone.yoga${post.fields.slug}`

  return (
    <React.Fragment>
      <Seo
        description={post.excerpt}
        image={hero.publicURL}
        title={title}
        lang={lang}
      />
      <Header pageTitle={title} url={url} />
      { hero ? <Hero image={hero} title={title} /> : '' }
      <div css={container} lang={lang}>
        { !hero ? (<h1>{title}</h1>) : '' }
        <div css={meta}>
          <span>{date}</span>
          <span>{`Reading time: ${post.timeToRead} minutes`}</span>
        </div>
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
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        date
        hero {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        lang
        title
      }
    }
  }
`

export default Article
