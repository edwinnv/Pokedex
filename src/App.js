import React, { useState } from "react";
import "./App.css";
import axios from "axios";



const myinput = {
  position: "absolute",
  left: "34.38%",
  right: "34.38%",
  top: "15.8%",
  bottom: "72.17%",


  boxsizing: "border-box",
  size: "2rem",
  width: "448px",
  padding: "1rem",
  display: "block",
  margin: "2rem auto"
}

const mycard = {
  /* Card */
  position: "center",
  left: "23.54%",
  right: "23.33%",
  top: "13.28%",
  bottom: "16.5%",

  width: "765px",
  height: "719px",

  background: " #FFFFFF",
  boxshadow: "0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)"
}

const pokeshearch = {
  /* PokeSearch */
  position: "absolute",
  left: "44.15%",
  right: "42.15%",
  top: "10.26%",
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
  right: "44.20%",
  height: "180px",
  width: "180px",

  top: "25.26%"
}

const namepoke = {
  /* No 1 Bulbasaur */
  position: "absolute",
  left: "45.30%",
  right: "41.81%",
  top: "40.29%",
  bottom: "48.14%",
  width: "600px",
  fontfamily: "Poppins",
  fontstyle: "normal",
  fontweight: "600",
  fontsize: "30px",
  lineheight: "45px",
  texttransform: "capitalize",

  color: "#414141"
}
const about1 = {
  /* About */
  position: "absolute",
  left: "32.50%",
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
  left: "32.50%",
  right: "24.72%",
  top: "51.79%",
  bottom: "35.45%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "12px",
  lineheight: "25px",

  width: "600px",

  color: "#5D5D5D"
}

const types1 = {
  /* Types */
  position: "absolute",
  left: "32.50%",
  right: "68.03%",
  top: "68.46%",
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
  left: "33.00%",
  right: "63.54%",
  top: "74.17%",
  bottom: "25.39%",
  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "18px",
  lineheight: "25px",
  /* identical to box height */
  color: "#5D5D5D"
}

const stats1 = {
  /* Stats */
  position: "absolute",
  left: "55.07%",
  right: "33.07%",
  top: "68.46%",
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
  left: "55.07%",
  right: "36.29%",
  top: "71.50%",
  bottom: "26.17%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "bold",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */
  color: "#5D5D5D"

}

const value1 = {
  /* Value */


  position: "absolute",
  left: "64.15%",
  right: "24.72%",
  top: "71.50%",
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

const text1 = {
  position: "absolute",
  left: "39.44%",
  right: "34.38%",
  top: "92.65%",
  bottom: "3.42%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "18px",
  lineheight: "30px",
  /* identical to box height, or 167% */

  display: "flex",
  alignitems: "center",

  color: "#414141"

}
const hp1 = {
  position: "absolute",
  left: "55.07%",
  right: "36.29%",
  top: "73.83%",
  bottom: "24.32%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */


  color: "#5D5D5D"

}
const hp2 = {
  position: "absolute",
  left: "64.15%",
  right: "24.72%",
  top: "76.30%",
  bottom: "24.32%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */

  textalign: "right",

  color: "#5D5D5D"
}

const attack1 = {
  position: "absolute",
  left: "55.07%",
  right: "36.29%",
  top: "75.80%",
  bottom: "22.46%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */


  color: "#5D5D5D"
}

const attack2 = {
  position: "absolute",
  left: "64.15%",
  right: "24.72%",
  top: "78.30%",
  bottom: "22.46%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */

  textalign: "right",

  color: "#5D5D5D"

}
const defense1 = {
  position: "absolute",
  left: "55.07%",
  right: "34.72%",
  top: "78.00%",
  bottom: "20.61%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
  fontsize: "14px",
  lineheight: "19px",
  /* identical to box height */

  color: "#5D5D5D"

}
const defense3 = {
  position: "absolute",
  left: "64.15%",
  right: "24.72%",
  top: "80.54%",
  bottom: "20.61%",

  fontfamily: "Open Sans",
  fontstyle: "normal",
  fontweight: "normal",
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
            name="ftext"
            id="ftext"
            style={myinput}
            onChange={handleChange}
            placeholder="Digite nombre Pokemon"

          />


        </label>
      </form>


      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img alt="Pokemon" style={pokeimg} src={data.sprites["front_default"]} />
            <h2 style={namepoke}>No {data.id} {data.name}</h2>
            <h2 style={about1}> About </h2>
            <div style={abouttext} >{about} </div>
            <h2 style={types1}> Types</h2>
            <div style={typetext}> {pokemonType} </div>
            <h2 style={stats1}> Stats </h2>
            <h4 style={stats2}> Stats </h4>
            <h4 style={value1}> Value</h4>
            <h4 style={hp1}>HP</h4>
            <div style={hp2}> {hp}</div>
            <h4 style={attack1}>Attack</h4>
            <div style={attack2}>{attack}</div>
            <h4 style={defense1}>Defense</h4>
            <div style={defense3}>{defense}</div>

          </div>

        );

      })}
      <label style={text1} >  Copyright © 2021, Guarapo Labs | All rights reserved. </label>
    </div>


  );
};

export default App;
