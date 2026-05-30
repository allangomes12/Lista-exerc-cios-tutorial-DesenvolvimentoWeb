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

// questão 8
app.get("/filmes/:id/:nome", (req, res) => {
    const id = req.params.id
    const nome = req.params.nome
    res.send(`O filme tem id: ${id} e nome ${nome}`)
});

//questão 9
app.get("/buscar", (req, res) =>{
    const nome = req.query.nome
    res.send(`Buscado por: ${nome}`)
});

//Questão 10
app.get("/produtos", (req, res) =>{
    const categoria = req.query.categoria
    const pagina = req.query.pagina
    res.send(`Categoria: ${categoria} / Página: ${pagina}`)
});

app.listen(8081, () => {
    console.log("Servidor rodando")
});