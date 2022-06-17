import React from 'react'

interface IfElseProps {
  condition: boolean
  isFalse: React.ReactNode
  children: React.ReactNode
}

const IfElse = (props: IfElseProps) => {
  const { condition, children, isFalse } = props
  return condition ? <>{children}</> : <>{isFalse}</>
}

export default IfElse