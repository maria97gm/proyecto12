import React from 'react'

const RenderError = ({ field, errors }) => {
  return errors[field] && <p> {errors[field].message} </p>
}

export default RenderError
