const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/info", pokemonController.getPokemonInfo);
router.get("/frase", pokemonController.getPokemonFrase);

module.exports = router;
