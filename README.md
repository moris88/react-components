# ESSENTIAL-COMPONENTS

## GUIDE TO USE

### FOR

```javascript
<ul>
    <For 
        list={['a','b','c']} 
        each={(el, key) => <li key={key}>{el}</li>}
    />
</ul>
```

### IF

```javascript
<If condition={count > 0}>
    <p>TRUE</p>
</If>
```

### IF-ELSE

```javascript
<IfElse 
    condition={count > 0} 
    isFalse={<p>FALSE</p>}>
        <p>TRUE</p>
</IfElse>
```

### TEST

```javascript
const test = {
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
  test4: 'test4',
  test5: 'test5',
  test6: 'test6',
}
<Test data={test}/>

/*
{
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
  test4: 'test4',
  test5: 'test5',
  test6: 'test6',
}
*/
```

## IMPORT TO REACT COMPONENTS

```javascript
import { If, IfElse, For, Test } from 'essential-components/Components'
```

## INSTALL

```
npm i essential-components
```