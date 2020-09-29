import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );
    console.log(data);
    setPokemon(data);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={pokemon.name}
          name="name"
        />
        <button type="submit"> Pokemon </button>
      </form>
      <Home list={pokemon} />
    </div>
  );
}

export default App;
