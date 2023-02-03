import { useEffect, useState } from "react";

const Pokemon = ({ pokename }) => {
  const [pokemon, setPokemon] = useState(false);

  useEffect(() => {
    async function fetchPokemon(){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon()
  }, [pokemon]);

  return(
    <div>
      {console.log(pokemon)}
      {pokemon &&
      <div>
        <div>
          <img src={pokemon.sprites.front_default} alt="Front facing"/>
          <img src={pokemon.sprites.back_default} alt="Back facing"/>
        </div>
        <ul>
          <li><b>Nome: </b> {pokemon.name}</li>
          <li><b>Altura: </b> {pokemon.height}</li>
          <li><b>Peso: </b> {pokemon.weight}</li>
          <li><b>Tipo: </b> {pokemon.types.map(type => (<span>{type.type.name} </span>))}</li>
        </ul>
      </div>  
      }
    </div>
   
  )
}

export default Pokemon;