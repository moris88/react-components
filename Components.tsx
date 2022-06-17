import Components from '.'

export const For: Components.For = (props: Components.ForProps) => {
    const { list, each } = props
    if (list instanceof Array) return <>{list.map(each)}</>
    else throw new Error(`'list' No array!`)
}

export const If: Components.If = (props: Components.IfProps) => {
    const { condition, children } = props
    return condition ? <>{children}</> : <></>
}

export const IfElse: Components.IfElse = (props: Components.IfElseProps) => {
    const { condition, children, isFalse } = props
    return condition ? <>{children}</> : <>{isFalse}</>
}

export const Test: Components.Test = (props: Components.TestProps) => {
    const { data } = props
    return <pre>{JSON.stringify(data, null, 5)}</pre>
}