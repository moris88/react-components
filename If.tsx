import React from 'react'

interface IfProps {
  condition: boolean
  children: React.ReactNode
}

const If = (props: IfProps) => {
  const { condition, children } = props
  return condition ? <>{children}</> : <></>
}

export default If
