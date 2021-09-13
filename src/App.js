import react, { useEffect } from 'react'
import reactDom from 'react-dom';
// import {add,sub,mul,div} from './calc'

// function App()
// {
//   return <div>
//   <ul>
//   <li>Sum Is {add(2,2)}</li>
//   <li>Sub Is {sub(4,2)}</li>
//   <li>Mul Is {mul(3,3)}</li>
//   <li>div Is {div(4,6)}</li>
//   </ul>
//   </div>
// }


function Add() {
  const [count,setCount] = react.useState(0)
  // useEffect(()=>
  // {
  //   alert('Incr/decr-App')
  // })
  function add() { 
    setCount(count + 1)
  }
  function sub()
  {
    setCount(count - 1)
  }
  return <div className='counter'>
    <h1>Temperature {count}<sup>o</sup>c</h1>
    <button onClick={add}>Add</button>
    <button onClick={sub}>Sub</button>
    
  </div>
}
export default Add;



