function DateAndTime() {
    const date = new Date();
    const currentDate = date.toLocaleDateString()
    const currentTime = setInterval(() => {
        const date = new Date();
        return date.toLocaleTimeString() 
    }, 2000);
    console.log(currentTime);
    return ( 
        <>
        <h1 style={{color : "gray", margin : "10px"}}>Current Date - {currentDate}</h1>
        <h1 style={{color : "gray", margin : "10px"}}> Current Time - {currentTime}</h1>
        </>
     );
}

export default DateAndTime;