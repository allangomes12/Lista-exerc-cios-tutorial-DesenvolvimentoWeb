const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

app.get("/", (req, res) => {
    res.send("Bem-vindo ao sistema")
});

app.listen(8081, () => {
    console.log("Servidor rodando")
})