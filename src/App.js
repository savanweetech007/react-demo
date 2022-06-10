import './App.css';
import Heading from './components/header';
function App(props) {
  
  return (
    <>
    <h1></h1>
   <Heading header={props.heading}/>
    {/* <Navbar/>
    <Article/>
   <Footer/> */}
    </>
  );
}

export default App;
