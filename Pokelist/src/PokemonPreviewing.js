 import { Link } from "react-router-dom";



const PokemonPreviewing  = ({pokemons}) => {
   
     return (
        pokemons.map((pokemon) => (
            <div className='pokemon-preview' key={pokemon.id}>
                <h2 className='pokemonTitle'>
                    {pokemon.title}
                </h2>
                
                <img className='pokePhoto' src={"./Assets/images/" + pokemon.title + ".png"} alt={pokemon.title + ".png"}/> 

                <p className = 'typeHeader'>
                    Type(s):
                </p>
                <div className ='pokeType'>
                    <div>
                         
                        {pokemon.types.map((type) => (
                           
                            <div className={`poke-type__item 
                                ${type === 'water' ? 'poke-type__water':''}
                                ${type === 'fire' ? 'poke-type__fire':''}
                                ${type === 'rock' ? 'poke-type__rock':''}
                                ${type === 'ice' ? 'poke-type__ice':''}
                                ${type === 'poison' ? 'poke-type__poison':''}
                                ${type ==='steel' ? 'poke-type__steel':''}
                                ${type === 'dark' ? 'poke-type__dark':''}
                                ${type === 'ghost' ? 'poke-type__ghost':''}
                                ${type === 'dragon' ? 'poke-type__dragon':''}
                                ${type === 'fairy' ? 'poke-type__fairy':''}
                                ${type === 'flying' ? 'poke-type__flying':''}
                                ${type === 'fighting' ? 'poke-type__fighting':''}
                                ${type === 'normal' ? 'poke-type__normal':''}
                                ${type === 'psychic' ? 'poke-type__psychic':''}
                                ${type === 'electric' ? 'poke-type__electric':''}
                                ${type === 'grass' ? 'poke-type__grass':''}
                                ${type === 'bug' ? 'poke-type__bug':''}
                                ${type === 'default' ? 'poke-type__default':''}
                                ${type === 'ground' ? 'poke-type__ground':''}`}
                                >
                                {type}
                                
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        ))
     );
}
 
export default PokemonPreviewing ;
