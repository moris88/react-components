interface TestProps {
  data: any
}

function Test(props: TestProps) {
  return <pre>{JSON.stringify(props.data, null, 5)}</pre>
}

export default Test
