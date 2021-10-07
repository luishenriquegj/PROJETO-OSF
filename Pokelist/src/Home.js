const  handleHover = () =>{
    function MouseOver(event) {
      event.target.style.background = 'black';
    }
    function MouseOut(event){
      event.target.style.background="";
    }
   
  }
const  Home =  () => {
    return(
        <div className = 'Home'>
        <h2 MouseOver={handleHover}>Home Page</h2>
        </div>
        
    );

}


export default Home;