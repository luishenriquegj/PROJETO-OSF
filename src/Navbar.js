import { Link} from 'react-router-dom'


const Navbar = () =>{
    return (
        <nav className = "navbar">
            <img className="siteIcon" src = '\Assets\Icons\Icon.png' alt ="Pokelist symbol"></img>
            <h1 className ='siteTitle'>Pokelist</h1>
            <div className ="links"> 
                <Link to ="/"  className ="Button">Home </Link>   
                &nbsp;&nbsp;    
                <Link to ="/addPokemon" className ="Button">Add new Pokemons </Link>  
            </div>
        </nav>

    );
}
export default Navbar;
