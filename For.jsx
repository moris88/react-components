import React from 'react'

const For = (props) => {
  const { list, each } = props
  if (list instanceof Array) return <>{list.map(each)}</>
  else throw new Error(`'list' No array!`)
}

export default For
