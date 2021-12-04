import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Appreducer from "./Appreducer";
import { useState } from 'react';

function Test() {

  const [state, setstate] = useState(true);

  return (
    <>
    <button onClick={()=>setstate(!state)}>Show/Hide</button>
    {state ? <Appreducer/> : <></>}
    </>
  )
}





ReactDOM.render(<Test/>,document.getElementById('root'));

