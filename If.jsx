import React from 'react'

const If = (props) => {
  const { condition, children } = props
  return condition ? <>{children}</> : <></>
}

export default If
