const express = require("express");
const app = express();
const pokemonRoutes = require("./routes/pokemonRoutes");
const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", pokemonRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/info`);
});
