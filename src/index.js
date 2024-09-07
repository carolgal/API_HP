//Importa os frameworks, bibliotecas etc
const express = require("express");
const app = express();

const port =12345;

app.listen(port, () => {
    console.log("API todando na porta " + port);
});