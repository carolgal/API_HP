//Importa os frameworks, bibliotecas etc
const express = require("express");
const app = express();

const routes = require("./routes");
const port = 12345;

//Informa qual biblioteca usar para o parsing de conteúdo
//True = qs (suporta nested) objects)
//False = querystring

app.use(express.urlencoded({ extended: true}));

//parser para json de informações vindas de um post

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log("API todando na porta " + port);
});