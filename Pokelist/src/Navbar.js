const Navbar = () =>{
    return (
        <nav className = "navbar">
            <img className="siteIcon" src = '.\Assets\images\icon.png'></img>
            <h1 className ='siteTitle'>Pokelist</h1>
            <div className ="links"> 
                <a href ="\"  className ="Button">Home </a>   
                &nbsp;&nbsp;    
                <a href ="\create" className ="Button">Add new Pokemons </a>  
            </div>
        </nav>

    );
}
export default Navbar;