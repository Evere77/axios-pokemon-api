// worked with Kevin
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // state var
  const [pokemons, setPokemons] = useState([])

  // GET AXIOS
  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then( (serverRes) => {
          console.log(serverRes)
          // AXIOS WRAPS its response inside a 'data' key
          setPokemons(serverRes.data.results)
        })
        .catch(err => console.log(err))
  }

  return (
    <>
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={axiosPokemons}>AXIOS Pokemon</button>
      {/* <p>{JSON.stringify(pokemons)}</p> */}
      {pokemons.map((poke, idx) => {
        return (
        <p key={idx}><li>{poke.name}</li></p>
        )
      })
      }
    </div>
    </>
  );
}

export default App;