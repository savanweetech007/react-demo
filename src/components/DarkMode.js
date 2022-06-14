import { useState } from "react";

function DarkMode() {

    const [light, setLight] = useState(false)
    
    const id = () => {

        setLight(!light)

        if(light === true){
            document.body.style.backgroundColor = "gray";
        }else{
            document.body.style.backgroundColor = "white";
        }
    }
    
    const buttonStyle = {marginLeft:"47%", padding:"15px", background:"skyblue"}

    return ( 
        <>
            <h1 style={{textAlign:"center"}}>Hello World</h1>
            <button style={buttonStyle} onClick={() => id()}>Dark Mode</button>
        </>
     );
}

export default DarkMode;