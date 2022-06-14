function Author(props) {
    return ( 
        <>
            <div>
            <h1 >Author Name : {props.author}</h1>
            <h4>Author Profession : {props.profession}</h4>
            </div>
        </>
     );
}

export default Author;