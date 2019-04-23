/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook.
 */

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

import Styles from '../styles/variables'

function SEO({
  description, image, lang, meta, keywords, robots, title,
}) {
  const { site, huojie } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            linkedin
          }
        }
        huojie: file(relativePath: { eq: "huojie-profile-pic.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  )
  const metaDescription = description || site.siteMetadata.description
  const pageTitle = title || site.siteMetadata.title
  const schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    familyName: 'Huo',
    givenName: 'Jie',
    worksFor: 'https://theone.yoga',
    jobTitle: 'Yoga Instructor',
    image: huojie.childImageSharp.fluid.src,
    gender: 'http://schema.org/Female',
    sameAs: [site.siteMetadata.linkedin],
    telephone: site.siteMetadata.phone,
    email: site.siteMetadata.email,
    knowsAbout: 'Iyengar Yoga',
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'robots',
          content: robots,
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: image || huojie.childImageSharp.fluid.src,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: window.location.href,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'msapplication-TileColor',
          content: Styles.colors.highlight,
        },
        {
          name: 'theme-color',
          content: Styles.colors.background,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : [],
        )
        .concat(meta)}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`,
        },
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  description: '',
  image: '',
  keywords: [],
  lang: 'en',
  meta: [],
  robots: 'follow',
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  robots: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
