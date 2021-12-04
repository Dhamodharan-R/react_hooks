import React,{useState} from 'react'

function App() {

  const [count , setCount] =  useState(1);
  const [name, setname] = useState("MSD");

  const [obj, setobj] = useState({age: 15, weight : 50 })

  const increment =() =>{
    setCount(count+1);
  }
  const decrement =() =>{
    setCount(count-1);
  }
  const reset =() =>{
    setCount(0);
  }
  const changename =()=>{
    setname("Dhoni")
  }

  const resetname =()=>{
    setname("MSD")
  }

  const changeage =()=>{
    setobj({...obj,age:25})
  }
  return (
    <div>
      <h1>useState</h1>
      <p>Count : {count}</p>
      <button onClick= {increment}>Increment</button>
      <button onClick= {decrement}>Decrement</button>
      <button onClick= {reset}>Reset</button>
      <p>Name : {name}</p>
      <button onClick= {changename}>Change Name</button>
      <button onClick= {resetname}>Reset</button>
      <p>Age : {obj.age}</p>
      <p>Weight : {obj.weight}</p>
      <button onClick= {changeage}>Change age</button>
    </div>
  )
}

export default App
