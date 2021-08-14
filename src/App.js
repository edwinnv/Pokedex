import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [hp, sethp]= useState(" ");
  const [attack, setattack]= useState(" ");
  
  const [defense, setdefense]= useState(" ");
  const [about, setabout] = useState(" ");
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
      setPokemonData(toArray);
      sethp(res.data.stats[0].base_stat);
      setattack(res.data.stats[1].base_stat);
      setdefense(res.data.stats[2].base_stat);
      getPokemon1(res.data.id);
      
    } catch (e) {
      console.log(e);
    }
  };

  const getPokemon1 = async (id) => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/ability/${id}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setabout(res.data.effect_entries[1].effect);
      
      
    } catch (e) {
      console.log(e);
    }
  };
   console.log(about);

 
 
  return (


    <div className="App p-4" >  
      <form onSubmit={handleSubmit}>
        <label>
        <div className="mb-3 fs-3 fw-semi">PokeSearch</div>
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
                    <div className="divTableCell">Attack</div>
                    <div className="divTableCell"> {attack}
                     
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Defense</div>
                    <div className="divTableCell">{defense}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">About</div>
                    <div className="divTableCell">{about}</div>
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
