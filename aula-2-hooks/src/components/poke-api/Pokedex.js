import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  useEffect(() => {
    async function fetchPokemons(){
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      const names = data.results.map(result => result.name)
      setPokemons(names);
    }
    fetchPokemons();
  }, []);

  return(
    <div>
      {pokemons.length &&
      <>
        <Pokemon pokename={pokemons[currentPokemonIndex]} />
        <br />
        {currentPokemonIndex > 0 && 
          <button onClick={() => setCurrentPokemonIndex(currentPokemonIndex - 1) }>Previous</button>}
        {currentPokemonIndex < pokemons.length - 1 &&
        <button onClick={() => setCurrentPokemonIndex(currentPokemonIndex + 1) }>Next</button>}
      </>
      }
    </div>
  )

}

export default Pokedex;