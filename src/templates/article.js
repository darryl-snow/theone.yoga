import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'

const Article = ({ data }) => {
  const post = data.markdownRemark
  return (
    <React.Fragment>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
      frontmatter {
        title
      }
    }
  }
`

export default Article
