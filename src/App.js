import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [hp, sethp]= useState(" ");
  const [id, setid] = useState(" ");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setid(res.data.id);
      setPokemonData(toArray);
      sethp(res.data.stats[0].base_stat);
      
    } catch (e) {
      console.log(e);
    }
  };

  console.log(pokemonData);
 
  console.log(id);
  return (


    <div className="App p-4" >  
      <form onSubmit={handleSubmit}>
        <label>
        <div class="mb-3 fs-3 fw-semi">PokeSearch</div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Digite nombre Pokemon"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {
        return (
          <div className="container">
              <img alt="Pokemon" src={data.sprites["front_default"]} />
              <div className="">No.{data.id} {data.name}</div>
              <div className="divTable">
                <div className="divTableBody">              
                  <div className="divTableRow">
                    <div className="divTableCell">Tipo</div>
                    <div className="divTableCell">{pokemonType}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">HP</div>
                    <div className="divTableCell"> {hp}                   
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Peso</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.weight / 4.3)} lbs
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Numero de batallas</div>
                    <div className="divTableCell">{data.game_indices.length}</div>
                  </div>
                </div>                     
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
