import './App.css';
import Date from './components/Date'

function App() {
  const imaagesArray = [
  {
    image : 'https://picsum.photos/200/300/?blur', 
    alt : "image1",
    heading:"Blur Image",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, natus rerum tempora aliquid dignissimos quod quisquam dolorum sint temporibus odio officia ab doloremque voluptatem veniam, similique tenetur illum molestias repudiandae!"
  },
  {
    image:'https://picsum.photos/200/300?grayscale', alt:"imaage2",
    heading:"Gray Scale Image",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, natus rerum tempora aliquid dignissimos quod quisquam dolorum sint temporibus odio officia ab doloremque voluptatem veniam, similique tenetur illum molestias repudiandae!"
},
  {
    image: 'https://picsum.photos/200/300.jpg', 
    alt:"image3",
    heading:"JPG Image",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, natus rerum tempora aliquid dignissimos quod quisquam dolorum sint temporibus odio officia ab doloremque voluptatem veniam, similique tenetur illum molestias repudiandae!"
  } 
]
  return (
    <>
     <h1 className='heading'>Hello world</h1>
     <div className='images-div'>
     {
       imaagesArray.map((value, i) => {
         return (
           <>
          <div>
          <img src={value.image} className="images" key={i} alt={value.alt} />
            <div style={{
    display: "block",
    textAlign: "center"
}}>
            <h1>{value.heading}</h1>
            <p>{value.content}</p>
            </div>
            </div>
           </>
          
         )
       })
     }
     </div>
    </>
  );
}

export default App;
