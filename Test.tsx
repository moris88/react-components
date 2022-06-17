interface TestProps {
  data: any
}

function Test(props: TestProps) {
  const { data } = props
  return <pre>{JSON.stringify(data, null, 5)}</pre>
}

export default Test
