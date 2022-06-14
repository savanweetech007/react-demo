import { useState } from "react";

function Count() {

    // Declare State
    let [count, setCount] = useState(0)
    let [msg, setMessage] = useState(false)

    const incrementNumber =() => {
        setCount(count + 1)
        if(count >= 0){
            setMessage(false)
        }
    }
    const decrementNumber =() => {
        setCount(count - 1)
        if(count <= 0){
            setCount(0)
            console.log("Count", count);
            setMessage(true)
        }
    }

    // if(count < 0){
    //     setMessage(true)
    //     setCount(0)
    // }
    // if(!(count < 0)){
    //     setMessage(false)
    //     setCount(0)
    // }

    
    const incrementStyle = {marginLeft:"47%", padding:"15px", background:"skyblue", cursor:"pointer"} 
    const decrementStyle = {marginLeft:"47%", padding:"15px", background:"skyblue", cursor:"pointer", marginTop:"10px"}
    return ( 
        <>
            <h1 style={{textAlign:"center"}}>{count}</h1>
            <button style={incrementStyle} onClick={() => incrementNumber()}>Increment</button>
            <button style={decrementStyle} onClick={() => decrementNumber()}>Decrement</button>
           { msg ? <h1 style={{textAlign:"center"}}>count = 0</h1>: <h1 style={{textAlign:"center"}}>Count is not Zero</h1> }
        </>
     );
}

export default Count;