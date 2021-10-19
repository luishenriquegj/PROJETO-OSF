import React, { useState } from 'react'
import { useHistory } from 'react-router';
const AddPokemon = () => {
    
    const [title,setTitle]= useState ('');
    const [type1,setType1]= useState ('');
    const [type2,setType2]= useState ('');
    const [image,setImage] = useState(''); 
    const Hist = useHistory();

    var types =[];
    const handleSubmit = (e) => {
        e.preventDefault();
        types [0]= type1.toLowerCase();
        types [1] = type2.toLowerCase();
        if(types [1] == '' ){
            types [1] = 'default';
        }
        const pokemon = {title,types,image};
        JSON.stringify(pokemon.image);
        console.log(pokemon);
        fetch('http://localhost:8001/pokemons',{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(pokemon)
    }).then(()=>{
         alert("a wild pokemon as been added!")
            Hist.push('/');
    })
    
}



return ( 
    <div className = "NewPokemon">
    <h2 className = "titleAdd">Add your New Pokemon </h2>
    <form className = "PokemonForm" onSubmit ={handleSubmit}>
        <h2 className ="PokemonFormHeaders">Insert your new Pokemon name's</h2>
        <input type="text" className ="formInputs" value ={title} onChange={(e) =>setTitle(e.target.value)} required/>
        
        <h2 className ="PokemonFormHeaders">Insert main type of your new Pokemon </h2>
        <input type="text" className ="formInputs" required value={type1} onChange={(e) =>setType1(e.target.value)}/>
        
        <h2 className ="PokemonFormHeaders" >Insert the secondary type  of your new Pokemon </h2>
        <input type="text" className ="formInputs"value={type2} onChange={(e) =>setType2(e.target.value)}/>
        <p>Leave empty if your  pokemon has only one type</p>
        
        <h2 className ="PokemonFormHeaders" >Insert your new Pokemon photo's</h2>
        <h3 className = 'formWarning'>the file must be named after the pokemon</h3>
        <input type="file"  className ="formInputs" value={image} onChange ={(e) => setImage(e.target.value)} /> 
        <h4 className ="warning">Image uploading still in development, the app will use a default image instead</h4>
        <input type = "submit" className ="SubmitForm"/>
    </form>
    
    </div>
    );
}

export default AddPokemon;
