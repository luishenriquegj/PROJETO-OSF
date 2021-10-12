import React from 'react'
import { useState } from "react";

const  Home = () => {
    const [pokemons,setPokemon] = useState([
        { title: 'Arcanine', types: ['fire', 'default'], id: '1'},
        { title: 'Beedrill', types: [ 'bug', 'poison'], id: '2'},
        { title: 'Blastoise',types: ['water', 'default'], id: '3'},
        { title: 'Bulbasaur', types: ['grass', 'poison'], id: '4'},
        { title: 'Butterfree',types: [ 'bug',  'flying'], id: '5'},
        { title: 'Caterpie', types: ['bug', 'default'], id: '6'},
        { title: 'Charizard',  types: [ 'fire' , 'default'], id: '7'},
        { title: 'Charmander', types: [ 'fire', 'default'], id: '8'},
        { title: 'Charmeleon', types: [ 'fire', 'default'], id: '9'},
        { title: 'Clefable',types: ['fairy',  'default'], id: '10'},
        { title: 'Dewgong', types: ['water', 'ice'], id: '11'},
        { title: 'Farfetchd', types: ['normal','flying'], id: '12'},
        { title: 'Golbat',types: ['poison','flying'], id: '13'},
        { title: 'Ivysaur',types: ['grass','poison'], id: '14'},
        { title: 'Kadabra',types: ['psychic', 'default'], id: '15'},
        { title: 'Kakuna',types: ['bug','poison'], id: '16'},
        { title: 'Metapod',types: ['bug', 'default'], id: '17'},
        { title: 'Pidgeot',types: ['normal','flying'], id: '18'},
        { title: 'Pidgeotto',types: ['normal','flying'] ,  id: '19'},
        { title: 'Pidgey',types: ['normal','flying'], id: '20'},
        { title: 'Pikachu',types: ['electric', 'default'], id: '21'},
        { title: 'Ponyta',types: ['fire', 'default'], id: '22'},
        { title: 'Raichu',types: ['electric', 'default'], id: '23'},
        { title: 'Raticate', types: ['normal', 'default'], id: '24'},
        { title: 'Rattata',types: ['normal', 'default'], id: '25'},
        { title: 'Squirtle',types: ['water', 'default'], id: '26'},
        { title: 'Venusaur',types: ['grass', 'poison'], id: '27'},
        { title: 'Vulpix', types: [ 'fire', 'default'], id: '28'},
        { title: 'Wartortle',types: ['water' , 'default'], id: '29'},
        { title: 'Weedle',types: ['bug','poison'], id: '30'}
    ]);

    return(
        <div className = 'Home'>
            {pokemons.map((pokemon) => (
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
                                    ${type == 'water' ? 'poke-type__water':''}
                                    ${type == 'fire' ? 'poke-type__fire':''}
                                    ${type == 'rock' ? 'poke-type__rock':''}
                                    ${type == 'ice' ? 'poke-type__ice':''}
                                    ${type == 'poison' ? 'poke-type__poison':''}
                                    ${type == 'steel' ? 'poke-type__steel':''}
                                    ${type == 'dark' ? 'poke-type__dark':''}
                                    ${type == 'ghost' ? 'poke-type__ghost':''}
                                    ${type == 'dragon' ? 'poke-type__dragon':''}
                                    ${type == 'fairy' ? 'poke-type__fire':''}
                                    ${type == 'flying' ? 'poke-type__flying':''}
                                    ${type == 'fairy' ? 'poke-type__fire':''}
                                    ${type == 'normal' ? 'poke-type__normal':''}
                                    ${type == 'psychic' ? 'poke-type__psychic':''}
                                    ${type == 'electric' ? 'poke-type__electric':''}
                                    ${type == 'grass' ? 'poke-type__grass':''}
                                    ${type == 'bug' ? 'poke-type__bug':''}
                                    ${type == 'default' ? 'poke-type__default':''}
                                    ${type == 'ground' ? 'poke-type__ground':''}`}
                                    >
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );}

export default Home;
