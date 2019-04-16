import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

const servicesList = css`
  display: flex;
  font-size: 0.65em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  li:not(:last-of-type):after {
    content: ' / '
  }

  @media (min-width: 47rem) {
    justify-content: flex-start;
  }
`

const Services = ({ services }) => (
  <ul css={servicesList}>
    {services.map(service => (
      <li>{service}</li>
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
