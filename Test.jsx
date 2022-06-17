function Test(props) {
  const { data } = props
  if (data) return <pre>{JSON.stringify(data, null, 5)}</pre>
  else <></>
}

export default Test
