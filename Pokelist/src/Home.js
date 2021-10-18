import React from 'react'
import PokemonPreviewing from './PokemonPreviewing.js';
import useFetch from './useFetch.js';


const  Home = () => {
    const {data:pokemons,isPending,error} = useFetch('http://localhost:8001/pokemons');
   
    
    
    return(
        <div className = 'Home'>
            <div className="pokemon-content">
                { error && <div className ='loadingText'> { error }</div>}
                {isPending && <h2 className ="loadingText">Loading Pokemons...</h2>}
                {pokemons && <PokemonPreviewing pokemons = {pokemons}/>}
            </div>
                
        </div>
    );}



export default Home;
