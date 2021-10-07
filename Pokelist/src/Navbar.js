const Navbar = () =>{
    return (
        <nav className = "navbar">
            <h1 style = {{
                color : "#f1356d",
                padding : '4px',
                backgroundColor: 'white',
                borderRadius : '28px',
                borderColor : '#f1356d',
                border : '4px  solid',

            }}>Pokelist</h1>
            <div className ="links"> 
                <a href ="\" style ={{
                    color : "white",
                    backgroundColor: '#f1356d',
                    borderRadius : '28px',
                } } className ="Button">Home </a>       
                <a href ="\create" style ={{
                    color : "white",
                    backgroundColor: '#f1356d',
                    borderRadius : '28px',
                     
                }}className ="Button">Add new Pokemons </a>  
            </div>
        </nav>

    );
}
export default Navbar;