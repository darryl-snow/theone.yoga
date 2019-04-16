/**
 * Loader is a static component that renders a CSS loading spinner.
 */

import { css } from '@emotion/core'
import React from 'react'

import Styles from '../styles/variables'

const loader = css`
  box-sizing: border-box;
  color: ${Styles.colors.highlight};
  display: block;
  font-size: 0;
  height: 48px;
  position: relative;
  width: 48px;
`

const firstChild = css`
  animation: square-jelly-box-animate .6s -.1s linear infinite;
  background-color: currentColor;
  border: 0 solid currentColor;
  border-radius: 10%;
  box-sizing: border-box;
  display: inline-block;
  float: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: -25%;
  width: 100%;
  z-index: 1;

  @keyframes square-jelly-box-animate {
    17% {
      border-bottom-right-radius: 10%;
    }
    25% {
      transform: translateY(25%) rotate(22.5deg);
    }
    50% {
      border-bottom-right-radius: 100%;
      transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
      transform: translateY(25%) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
`

const secondChild = css`
  animation: square-jelly-box-shadow .6s -.1s linear infinite;
  background: ${Styles.colors.shadow};
  border-radius: 50%;
  bottom: -9%;
  display: inline-block;
  float: none;
  height: 10%;
  left: 0;
  opacity: 0.2;
  position: absolute;
  width: 100%;

  @keyframes square-jelly-box-shadow {
    50% {
      transform: scale(1.25, 1);
    }
  }
`

const Loader = () => (
  <div css={loader}>
    <div css={firstChild} />
    <div css={secondChild} />
  </div>
)

export default Loader
