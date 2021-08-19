import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";


const myinput = {
  position: "absolute",
  left: "35.38%",
  right: "34.38%",
  top: "12.8%",
  bottom: "72.17%",
  fontsize: "6px",
  fontfamily: "Poppins",
  fontstyle: "normal"
}

const mycard = {
  /* Card */
  position: "absolute",
  left: "23.54%",
  right: "23.33%",
  top: "13.28%",
  bottom: "16.5%",
  blend: "Pass through",

  background: " #FFFFFF",
  boxshadow: "0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)"
}

const pokeshearch = {
  /* PokeSearch */
  position: "absolute",
  left: "42.15%",
  right: "42.15%",
  top: "6.26%",
  bottom: "80.18%",

  fontfamily: "Poppins",
  fontstyle: "normal",
  fontweight: "600",
  fontsize: "36px",
  lineheight: "54px",
  texttransform: "capitalize",
  color: "#414141"
}

const pokeimg = {
  position: "absolute",
 right: "40%",
  width: "134px",
  height: "130px",
  top: "25.26%"
}

const namepoke = {
  /* No 1 Bulbasaur */
position: "absolute",
left: "45.01%",
right: "41.81%",
top: "40.29%",
bottom: "48.14%",
width: "600px",
fontfamily:"Poppins",
fontstyle: "normal",
fontweight: "600",
fontsize: "30px",
lineheight: "45px",
texttransform: "capitalize",

color:"#414141"
}
const about1 = {
  /* About */
position: "absolute",
left: "24.93%",
right: "68.75%",
top: "45.07%",
bottom: "45.41%",
fontfamily: "Poppins",
fontstyle: "normal",
fontweight: "500",
fontsize: "24px",
lineheight: "36px",
/* identical to box height */

color: "#414141"
}
const abouttext = {
  position: "absolute",
left: "24.93%",
right: "24.72%",
top: "54.79%",
bottom: "35.45%",

fontfamily: "Open Sans",
fontstyle: "normal",
fontweight: "normal",
fontsize: "18px",
lineheight: "25px",

color: "#5D5D5D"
}

const types1 = {
  /* Types */
position: "absolute",
left: "24.93%",
right: "68.03%",
top: "70.46%",
bottom: "28.03%",
fontfamily: "Poppins",
fontstyle: "normal",
fontweight: "500",
fontsize: "24px",
lineheight: "36px",
/* identical to box height */
color: "#414141"
}

const typetext = {
  /* Grass, Poisson */
position: "absolute",
left: "24.93%",
right: "63.54%",
top: "78.17%",
bottom: "25.39%",
fontfamily: "Open Sans",
fontstyle: "normal",
fontweight: "normal",
fontsize: "18px",
lineheight: "25px",
/* identical to box height */
color:"#5D5D5D"
}

const stats1 = {
  /* Stats */
position: "absolute",
left: "75.07%",
right: "33.07%",
top: "70.46%",
bottom: "28.03%",

fontfamily: "Poppins",
fontstyle: "normal",
fontweight: "500",
fontsize: "24px",
lineheight: "36px",
/* identical to box height */
color: "#414141"

}

const stats2 = {
  /* Stats */
position: "absolute",
left: "72.07%",
right: "36.29%",
top: "74.97%",
bottom: "26.17%",

fontfamily: "Open Sans",
fontstyle: "normal",
fontweight: "bold",
fontsize: "14px",
lineheight: "19px",
/* identical to box height */
color: "#5D5D5D"

}

const value1 ={
  /* Value */


position: "absolute",
left: "85.15%",
right: "24.72%",
top: "74.97%",
bottom: "26.17%",

fontfamily: "Open Sans",
fontstyle: "normal",
fontweight: "bold",
fontsize: "14px",
lineheight: "19px",
/* identical to box height */

textalign: "right",

color: "#5D5D5D"
}



const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [hp, sethp] = useState(" ");
  const [attack, setattack] = useState(" ");

  const [defense, setdefense] = useState(" ");
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


    <div style={mycard}>
      <form onSubmit={handleSubmit}>
        <label>
          <h1 style={pokeshearch}>PokeSearch</h1>
          <input
            type="text"
            style={myinput}
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
            <img  alt="Pokemon" style={pokeimg} src={data.sprites["front_default"]} />
            <h2 style={namepoke}>No {data.id} {data.name}</h2>
            <h2 style ={about1}> About </h2>
            <div style={abouttext} >{about} </div>
            <h2 style= {types1}> Types</h2>
            <div style = {typetext}> {pokemonType} </div>
            <h2 style = {stats1}> Stats </h2>
            <h4 style= {stats2}> Stats </h4>
            <h4 style = {value1}> Value</h4>
           {/*  <div className="divTable">
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
            </div>  */}
          </div>
        );
        
      })}
    </div>

  );
};

export default App;
