const pokemones = require("../models/pokemonModel");
const os = require("os")

const getPokemonFrase = (req, res) => {
  const random = pokemones[Math.floor(Math.random() * pokemones.length)];
  
  const imageName = random.nombre.toLowerCase() + ".png";
  const imageUrl = random.imagen;
  const id_contenedor = os.hostname;

  res.render("frase", {
    frase: random.frase,
    nombre: random.nombre,
    imagen: imageUrl,
    contenedor: id_contenedor,
  });
};

const getPokemonInfo = (req, res) => {
  const random = pokemones[Math.floor(Math.random() * pokemones.length)];
  const { id, nombre, altura, habilidad } = random;
  const id_contenedor = os.hostname();
  res.json({ id, nombre, altura, habilidad, id_contenedor});
};

module.exports = {
  getPokemonFrase,
  getPokemonInfo
};
