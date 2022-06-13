import Author from './Author'
function Message(props) {
    return ( 
    <>
       {
        props.arr.map((card_detail, index) => {
            return (
               <>
                <div className="card" key={index}>
                <img src={card_detail.url} alt="Avatar" style={{width:"100%", height:"400px"}}/>
                <div className="container">
                    <h4><b>{card_detail.author}</b></h4> 
                    <p>{card_detail.profession}</p> 
                </div>
                
                </div>
                <Author author={card_detail.author} profession={card_detail.profession}/>
               </>
            )
        })
    }
    </>
     );
}

export default Message;