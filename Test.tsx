interface TestProps {
  data: any
}

function Test(props: TestProps) {
  const { data } = props
  if (data) return <pre>{JSON.stringify(data, null, 5)}</pre>
  else <></>
}

export default Test
