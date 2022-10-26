import React,{useState} from 'react'

const Counter = ({initialValue}) => {

    const [count, setCount]= useState(initialValue)

  return (
    <div>
        <h3>Counter:<span style={{color:count%2==0 ? "green" :"red"}}>{count}</span></h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>

        <button onClick={()=>{
                         setCount(count*2)
                          
                         
                          
                          
            }} >double</button>
     
    </div>
  )
}

export default Counter