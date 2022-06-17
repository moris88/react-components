import React from 'react'

const IfElse = (props) => {
  const { condition, children, isFalse } = props
  return condition ? <>{children}</> : <>{isFalse}</>
}

export default IfElse