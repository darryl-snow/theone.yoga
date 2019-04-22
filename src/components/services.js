/**
 * Services component renders a list of services based on props passed down.
 */

import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

import Styles from '../styles/variables'

const servicesList = css`
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  li:not(:last-of-type):after {
    content: '\00a0\u2044\00a0'
  }

  @media (min-width: ${Styles.layout.breakpoint}) {
    justify-content: flex-start;
  }
`

const Services = ({ services }) => (
  <ul css={servicesList}>
    {services.map(service => (
      <li key={service}>{service}</li>
    ))}
  </ul>
)

Services.defaultProps = {
  services: [],
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string),
}

export default Services
