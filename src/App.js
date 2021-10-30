import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AddPokemon from './AddPokemon';
import PokemonDetails from './PokemonDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/AddPokemon">
                <AddPokemon />
            </Route>
            <Route exact path="/pokemons/:id">
                <PokemonDetails />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
