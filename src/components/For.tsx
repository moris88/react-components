import React from 'react'

interface ForProps {
  list: any[]
  each: (el: any, key: number) => React.ReactNode
}

const For = (props: ForProps) => {
  const { list, each } = props
  if (list instanceof Array) return <>{list.map(each)}</>
  throw new Error('No array')
}

export default For
