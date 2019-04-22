/**
 * This uses the resume component to render a resume page, passing the English
 * language code to that component.
 */

import React from 'react'
import Resume from '../components/resume'

const EnglishResume = () => (
  <Resume languageCode="en" />
)

export default EnglishResume
