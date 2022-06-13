import './App.css';
import Author from './components/Author';
import Heading from './components/header';
import Message from './components/Message';


function App() {
  let card_detail = [
    {
      id: "1001",
      author: "Danielle MacInnes",
      profession:"Designer",
      url: "https://picsum.photos/id/1001/5616/3744"
      },
      {
      id: "1002",
      author: "NASA",
      profession:"Devloper",
      url: "https://picsum.photos/id/1002/4312/2868"
      },
      {
        id: "1003",
        author: "E+N Photographies",
        profession:"Software Devloper",
        url: "https://picsum.photos/id/1003/1181/1772"
        },
        {
          id: "1004",
          author: "Greg Rakozy",
          profession:"Project Manager",
          url: "https://picsum.photos/id/1004/5616/3744"
          },
          {
            id: "1005",
            author: "Matthew Wiebe",
            profession:"Manager",
            url: "https://picsum.photos/id/1005/5760/3840"
            },
  ];
  return (
    <>
    <Message arr={card_detail}/>
    </>
  );
}

export default App;
