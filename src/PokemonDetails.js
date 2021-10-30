import { useParams } from "react-router";
import useFetch from "./useFetch";

const PokemonDetails = () => {
    const {id} =useParams();
    const {data:pokemons,error,isPending} =useFetch('http://localhost:8001/pokemons/' + id);
    return ( 
        <div className= "Pokemon-details"> 
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {pokemons && (
                <div className ="detail-container">
                    <h2 className ="title-detail">{pokemons.title}</h2>
                    <img className='photo-detail' src={"/Assets/images/" + pokemons.title + ".png"} alt={pokemons.title + ".png"}/> 
                    <div >
                         
                         {pokemons.types.map((type) => (
                            
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
          )}
        </div>
     );
}
 
export default PokemonDetails;