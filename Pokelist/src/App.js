import Navbar from './Navbar';
import Home from './Home'
const  handleHover = () =>{
  function MouseOver(event) {
    event.target.style.background = 'black';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
 
}

function App() {
  const title = 'Welcome to the Pokelist'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}


export default App;
