export const For = (props) => {
    const { list, each } = props
    if (list instanceof Array) return <>{list.map(each)}</>
    else throw new Error(`'list' No array!`)
}

export const If = (props) => {
    const { condition, children } = props
    return condition ? <>{children}</> : <></>
}

export const IfElse = (props) => {
    const { condition, children, isFalse } = props
    return condition ? <>{children}</> : <>{isFalse}</>
}

export const Test = (props) => {
    const { data } = props
    return <pre>{JSON.stringify(data, null, 5)}</pre>
}