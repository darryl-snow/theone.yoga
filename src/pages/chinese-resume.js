/**
 * This uses the resume component to render a resume page, passing the Chinese
 * language code to that component.
 */

import React from 'react'
import Resume from '../components/resume'

const ChineseResume = () => (
  <Resume languageCode="zh" />
)

export default ChineseResume
