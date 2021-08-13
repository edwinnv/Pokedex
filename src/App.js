import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
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
      
    } catch (e) {
      console.log(e);
    }
  };

  console.log(pokemonData);
 
  console.log(id);
  return (
<<<<<<< Updated upstream
    <div className="App p-4">  
=======
    <div className="App p-4" >  
>>>>>>> Stashed changes
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
                    <div className="divTableCell">No</div>
                    <div className="divTableCell">{data.id}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Tipo</div>
                    <div className="divTableCell">{pokemonType}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Altura</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.height * 3.9)}"
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
<<<<<<< Updated upstream
=======
                <div className="divTableRow">
                  <div className="divTableCell">Numero de batallas</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>           
>>>>>>> Stashed changes
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
