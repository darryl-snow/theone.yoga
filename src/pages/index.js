/**
 * Index component is the home page for the website. It pulls in all the
 * markdown articles as well as the site meta data from graphql. The homepage
 * has its own specific template.
 */

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Articles from '../components/articles'
import ContactForm from '../components/contact-form'
import Seo from '../components/seo'
import Sidebar from '../components/sidebar'

import GlobalStyles from '../styles/global.module.css'

const IndexPage = ({ data }) => (
  <div className={GlobalStyles.container}>
    <Seo
      keywords={[
        'huojie',
        'lulu',
        'yoga',
        'singapore',
        'iyengar',
        'instructor',
        'teacher',
        'class',
        'private',
      ]}
      title={data.site.siteMetadata.description}
    />
    <aside className={GlobalStyles.sideContent}>
      <Sidebar
        description={data.site.siteMetadata.description}
        email={data.site.siteMetadata.email}
        linkedin={data.site.siteMetadata.linkedin}
        title={data.site.siteMetadata.title}
        phone={data.site.siteMetadata.phone}
        wechat={data.site.siteMetadata.wechat}
        services={data.site.siteMetadata.services}
      />
    </aside>
    <main className={GlobalStyles.mainContent}>
      <Articles data={data.allMarkdownRemark} />
      <ContactForm />
    </main>
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-M-D")
            lang
          }
          fields {
            slug
          }
          excerpt(format: HTML)
        }
      }
    }
    site {
      siteMetadata {
        description
        email
        linkedin
        phone
        title
        wechat
        services
      }
    }
  }
`
