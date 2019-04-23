/**
 * Resume component renders a resume based on data from the site config.
 */

import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'
import {
  FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaWindowMaximize,
} from 'react-icons/fa'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Seo from './seo'

import Styles from '../styles/variables'

const grid = css`
  display: grid;

  @media screen and (min-width: ${Styles.layout.breakpoint}) {
    grid-template-columns: 75% 25%;
  }

  @media print {
    font-size: 0.85em;
    grid-template-columns: 70% 30%;
  }
`

const header = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${Styles.layout.spacing};
  width: 100%;

  @media screen and (min-width: ${Styles.layout.breakpoint}) {
    flex-direction: row;
  }

  @media print {
    flex-direction: row;
    padding: 0.75rem;
  }
`

const image = css`
  flex: 0 0 auto;
  margin-bottom: ${Styles.layout.spacing};
  margin-right: 0;
  overflow: visible;
  width: 8em;

  @media screen and (min-width: ${Styles.layout.breakpoint}), print {
    margin-bottom: 0;
    margin-right: ${Styles.layout.spacing};
  }
`

const name = css`
  font-size: 3em;
  margin: 0 0 0.25em 0;
`

const introduction = css`
  flex: 1 1 auto;
  line-height: 1.5em;
  text-align: center;

  p {
    margin: 0;
    max-width: 80ch;
  }

  @media screen and (min-width: ${Styles.layout.breakpoint}), print {
    text-align: left;
  }
`

const detailsList = css`
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0 ${Styles.layout.spacing} ${Styles.layout.spacing} ${Styles.layout.spacing};
  text-align: center;

  li {
    margin-bottom: 0.25em;
  }

  svg {
    margin-right: 0.5em;
  }

  @media screen and (min-width: ${Styles.layout.breakpoint}) {
    padding: ${Styles.layout.spacing};
    text-align: left;
  }

  @media print {
    font-size: 1em;
    padding: 0.75rem;
    text-align: left;
  }
`

const gridSection = css`
  padding: ${Styles.layout.spacing} ${Styles.layout.spacing} 0 ${Styles.layout.spacing};

  @media screen and (min-width: ${Styles.layout.breakpoint}) {
    padding: ${Styles.layout.spacing};
  }

  @media print {
    padding: 0.75rem;
  }
`

const subheading = css`
  color: ${Styles.colors.highlight};
  font-size: 2em;
  margin-top: 0;
`

const unstyledList = css`
  margin: 0;
`

const listItem = css`
  margin-bottom: 2em;
`

const listItemHeading = css`
  margin: 0 0 0.35em 0;
`

const firstMeta = css`
  display: inline-block;
  font-style: italic;
  font-weight: 400;

  &::before {
    content: '\00a0\u2013 ';
  }
`

const secondMeta = css`
  display: inline-block;
  font-weight: 400;

  &::before {
    content: '\00a0\u2013 ';
  }
`

const dateRange = css`
  font-size: 0.8em;
  font-style: italic;
  margin: 0;
`

const Resume = ({ languageCode }) => {
  const renderExperience = experiences => experiences.map((experience) => {
    const {
      company,
      location,
      position,
      dates,
      description,
    } = experience
    return (
      <li css={listItem} key={company}>
        <h3 css={listItemHeading}>
          {company}
          <span css={firstMeta}>{location}</span>
          <span css={secondMeta}>{position}</span>
        </h3>
        <p css={dateRange}>{`${dates.start} - ${dates.end}`}</p>
        <p>{description}</p>
      </li>
    )
  })
  const renderEducation = educations => educations.map((education) => {
    const {
      course,
      dates,
      description,
      location,
      school,
    } = education
    return (
      <li css={listItem} key={school}>
        <h3 css={listItemHeading}>
          {school}
          <span css={firstMeta}>{location}</span>
          <span css={secondMeta}>{course}</span>
        </h3>
        <p css={dateRange}>{`${dates.start} - ${dates.end}`}</p>
        <p>{description}</p>
      </li>
    )
  })
  const renderWorkshops = workshops => workshops.map((workshop) => {
    const {
      date,
      description,
      location,
      teacher,
    } = workshop
    return (
      <li css={listItem} key={teacher}>
        <h3 css={listItemHeading}>
          {teacher}
          <span css={firstMeta}>{location}</span>
        </h3>
        <p css={dateRange}>{date}</p>
        <p>{description}</p>
      </li>
    )
  })
  const renderList = listItems => listItems.map(item => (
    <li key={item}>{item}</li>
  ))
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
              email
              linkedin
              phone
              resume {
                en {
                  intro
                  location
                  experience {
                    company
                    location
                    position
                    dates {
                      start
                      end
                    }
                    description
                  }
                  education {
                    school
                    location
                    course
                    dates {
                      start
                      end
                    }
                    description
                  }
                  workshops {
                    teacher
                    location
                    date
                    description
                  }
                  skills
                  certifications
                  languages
                  interests
                }
                zh {
                  intro
                  location
                  experience {
                    company
                    location
                    position
                    dates {
                      start
                      end
                    }
                    description
                  }
                  education {
                    school
                    location
                    course
                    dates {
                      start
                      end
                    }
                    description
                  }
                  workshops {
                    teacher
                    location
                    date
                    description
                  }
                  skills
                  certifications
                  languages
                  interests
                }
              }
              services
              title
              website
              wechat
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
      `}
      render={(data) => {
        const {
          description,
          email,
          phone,
          title,
          website,
        } = data.site.siteMetadata
        const {
          intro,
          location,
          experience,
          education,
          workshops,
          skills,
          certifications,
          languages,
          interests,
        } = data.site.siteMetadata.resume[languageCode]
        return (
          <React.Fragment>
            <Seo
              description={description}
              title={description}
              lang={languageCode}
            />
            <header css={grid} style={{ borderBottom: `1px solid ${Styles.colors.borders}` }}>
              <div css={header}>
                <Img
                  alt="Huo Jie"
                  css={image}
                  fluid={data.huojie.childImageSharp.fluid}
                />
                <div css={introduction}>
                  <h1 css={name}>{title}</h1>
                  <p>{intro}</p>
                </div>
              </div>
              <ul css={detailsList}>
                <li>
                  <FaMapMarkerAlt />
                  {location}
                </li>
                <li>
                  <FaMobileAlt />
                  {phone}
                </li>
                <li>
                  <FaEnvelope />
                  {email}
                </li>
                <li>
                  <FaWindowMaximize />
                  {website}
                </li>
              </ul>
            </header>
            <main css={grid}>
              <div css={gridSection}>
                <section>
                  <h2 css={subheading}>Experience</h2>
                  <ul css={unstyledList}>{renderExperience(experience)}</ul>
                </section>
                <section>
                  <h2 css={subheading}>Education</h2>
                  <ul css={unstyledList}>{renderEducation(education)}</ul>
                </section>
                <section>
                  <h2 css={subheading}>Workshops</h2>
                  <ul css={unstyledList}>{renderWorkshops(workshops)}</ul>
                </section>
              </div>
              <aside css={gridSection}>
                <section>
                  <h2 css={subheading}>Skills</h2>
                  <ul>{renderList(skills)}</ul>
                </section>
                <section>
                  <h2 css={subheading}>Certifications</h2>
                  <ul>{renderList(certifications)}</ul>
                </section>
                <section>
                  <h2 css={subheading}>Languages</h2>
                  <ul>{renderList(languages)}</ul>
                </section>
                <section>
                  <h2 css={subheading}>Interests</h2>
                  <ul>{renderList(interests)}</ul>
                </section>
              </aside>
            </main>
          </React.Fragment>
        )
      }}
    />
  )
}

Resume.propTypes = {
  languageCode: PropTypes.string.isRequired,
}

export default Resume
