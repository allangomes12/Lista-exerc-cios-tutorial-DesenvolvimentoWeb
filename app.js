const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

// questão 1
app.get("/", (req, res) => {
    res.send("Bem-vindo ao sistema")
});

// questão 2
app.get("/sobre", (req,res) => {
    res.send("Esta é a porta SOBRE")
});

// questão 3
app.get("/contato", (req, res) => {
    res.json({
        email: "contato@gmail.com",
        telefone: "(81) 99999-9999"
    });
});

// questão 4 
app.get("/erro", (req, res) => {
    res.status(404).send("Página não encontrada")
});

//questão 5
app.get("/inicio", (req, res) =>{
    res.redirect("/")
});

// questão 6
app.get("/usuarios/:id", (req, res) => {
    const id = req.params.id
    res.send(`Usuário ${id}`)
});

// questão 7
app.get("/produtos/:nome", (req, res) =>{
    const nome = req.params.nome
    res.send(`Nome do produto: ${nome}`)
});

app.listen(8081, () => {
    console.log("Servidor rodando")
});