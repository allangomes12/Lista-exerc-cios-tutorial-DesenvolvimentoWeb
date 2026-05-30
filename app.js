const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

app.get("/", (req, res) => {
    res.send("Bem-vindo ao sistema")
});

app.get("/sobre", (req,res) => {
    res.send("Esta é a porta SOBRE")
});

app.listen(8081, () => {
    console.log("Servidor rodando")
});