import React, { useState } from 'react'
const AddPokemon = () => {
    
    const [title,setTitle]= useState ('');
    const [type1,setType1]= useState ('');
    const [type2,setType2]= useState ('');
    var types =[];
    const handleSubmit = (e) => {
        e.preventDefault();
        types [0]= type1.toLowerCase();
        types [1] = type2.toLowerCase();
        if(types [1] == '' ){
            types [1] = 'default';
        }
        const pokemon = {title,types};
        console.log(pokemon);
        fetch('http://localhost:8001/pokemons',{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(pokemon)
    }).then(()=>{
         alert("a wild pokemon as been added!")
    })
    
}



return ( 
    <div className = "NewPokemon">
    <h2 className = "titleAdd">Add your New Pokemon </h2>
    <form className = "PokemonForm" onSubmit ={handleSubmit}>
        <h2 className ="PokemonFormHeaders">Insert your new Pokemon name's</h2>
        <input type="text" className ="formInputs" value ={title} onChange={(e) =>setTitle(e.target.value)}/>
        
        <h2 className ="PokemonFormHeaders">Insert main type of your new Pokemon </h2>
        <input type="text" className ="formInputs" required value={type1} onChange={(e) =>setType1(e.target.value)}/>
        
        <h2 className ="PokemonFormHeaders" >Insert the secondary type  of your new Pokemon </h2>
        <input type="text" className ="formInputs"value={type2} onChange={(e) =>setType2(e.target.value)}/>
        <p>Leave empty if your  pokemon has only one type</p>
        
        <h2 className ="PokemonFormHeaders" >Insert your new Pokemon photo's</h2>
        <h3 className = 'formWarning'>the file must be named after the pokemon</h3>
        <input type="file"  className ="formInputs" /> 
        
        <input type = "submit" className ="SubmitForm"/>
    </form>
    
    </div>
    );
}

export default AddPokemon;
