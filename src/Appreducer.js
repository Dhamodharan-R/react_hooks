import { useReducer ,useEffect} from "react"
import React  from 'react'

function Appreducer() {

    const countReducer =(count,action)=>{

        switch (action) {
            case "increment":{

                return count+1;
            }
                
            case "decrement":{
                return count-1;

            }
                
            case "reset":{
                return 0;
            }
                
            default:
                return count;
            
        }
    }

    useEffect(()=>{
        console.log("component did mount");
    },[])

    useEffect(()=>{
        console.log("component did update")
    })

    useEffect(() => {

        return ()=>{
            console.log("component will unmount");
        }
    } ,[])



    const [count, dispatch] = useReducer(countReducer,1)
    return (
        <div>
            <h1>useReducer</h1>
            <p> Count : {count}</p>
            <button onClick= {()=>dispatch("increment")}>Increment</button>
            <button onClick= {()=>dispatch("decrement")}>Decrement</button>
            <button onClick= {()=>dispatch("reset")}>Reset</button>
        </div>
    )
}

export default Appreducer;
