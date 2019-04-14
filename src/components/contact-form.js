/**
 * ContactForm displays a simple form with 2 fields. It posts the form data
 * to the Datafire API, which triggers a gmail to Huo Jie's inbox.
 * https://theoneyoga.prod.with-datafire.io/contact
 */

import Axios from 'axios'
import { css } from '@emotion/core'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import Loader from './loader'

const form = css`
  background: #F4F4F4;
  overflow: hidden;
  position: relative;
`

const wrapper = css`
  margin: 3rem;
`

const smallWrapper = css`
  margin: 2rem auto;
  width: 85%;

  @media (min-width: 47em) {
    width: 75%;
  }
`

const title = css`
  margin: 0;
`

const label = css`
  color: #777;
`

const input = css`
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 0.15em;
  box-sizing: border-box;
  color: #444;
  display: block;
  font-size: 1.25em;
  padding: 0.75em;
  width: 100%;
`

const error = css`
  color: #ee5253;
  font-size: 0.75em;
  margin-left: 1em;
`

const button = css`
  background-color: #b189ba;
  border: none;
  border-radius: 0.15em;
  box-shadow: none;
  color: white;
  cursor: pointer;
  margin-top: 1.5rem;
  opacity: 0.75;
  padding: 0.75em;
  transition: 0.2s all ease-in-out;

  &:active,
  &:focus,
  &:hover {
    opacity: 1;
  }
`

const formStatus = css`
  font-size: 2.5em;
  font-weight: 300;
`

const overlay = css`
  align-items: center;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  height: calc(100% - 6rem - 2.5em);
  justify-content: center;
  left: 3em;
  position: absolute;
  top: calc(3rem + 2.5em);
  width: calc(100% - 6rem);
  z-index: 1;
`

const ContactForm = ({ page }) => (
  <Formik
    initialValues={{
      from: '',
      message: '',
    }}
    onSubmit={(formData, actions) => {
      setTimeout(() => {
        Axios.post('https://theoneyoga.prod.with-datafire.io/contact', formData)
          .then((response) => {
            // eslint-disable-next-line
            console.log(response)
            actions.resetForm()
            actions.setStatus({ success: 'Thanks! I\'ll be in Touch!' })
            actions.setSubmitting(false)
          })
      }, 400)
    }}
    validate={(values) => {
      const errors = {}
      if (!values.from) {
        errors.from = 'Required'
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.from)
      ) {
        errors.from = 'Invalid email address'
      }
      if (!values.message) {
        errors.message = 'Required'
      }
      return errors
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      status,
    }) => (
      <div css={form}>
        <div css={page === 'article' ? smallWrapper : wrapper}>
          <h2 css={title}>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label css={label} htmlFor="from">
                <p>
                  Your email address:
                  <span css={error}>{errors.from && touched.from && errors.from}</span>
                </p>
                <input
                  css={input}
                  id="from"
                  name="from"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="yourem@il.com"
                  type="email"
                  value={values.from}
                />
              </label>
            </div>
            <div>
              <label css={label} htmlFor="message">
                <p>
                  Write me a message:
                  <span css={error}>{errors.message && touched.message && errors.message}</span>
                </p>
                <textarea
                  css={input}
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                />
              </label>
            </div>
            <button css={button} disabled={isSubmitting} type="submit">
              Send Message
            </button>
            {!isSubmitting ? '' : (
              <div css={overlay}>
                <h5 css={formStatus}>Sending&hellip;</h5>
                <Loader />
              </div>
            )}
            {!status || !status.success ? '' : (
              <div css={overlay}>
                <h5 css={formStatus}>{status.success}</h5>
              </div>
            )}
          </form>
        </div>
      </div>
    )}
  </Formik>
)

ContactForm.defaultProps = {
  page: '',
}

ContactForm.propTypes = {
  page: PropTypes.string,
}

export default ContactForm
