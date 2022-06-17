function Test(props) {
  const { data } = props
  return <pre>{JSON.stringify(data, null, 5)}</pre>
}

export default Test
