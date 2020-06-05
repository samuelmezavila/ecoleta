const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db")

//configuração pasta public
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos
//pagina inicial
server.get("/", (req,res) => {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", (req,res) => {
    
    //console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    //console.log(req.body)

    //inserir dados no db
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
               items
            ) VALUES (?,?,?,?,?,?,?);
        `
        
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]
    
        function afterInsertData(err){
            if(err){
                return console.log(err)
           }
            console.log("Cadastrado com Sucesso")
            console.log(this)

            return res.render("create-point.html", { saved: true})
        }
    
        db.run(query, values, afterInsertData)    
})

server.get("/search", (req,res) => {

    const search = req.query.search
    if(search == ""){
        //mostrar a pagina com os dados
        return res.render("search-results.html", { total: 0})
    }

    //pegar os dados do db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        //contar elementos da página search
        const total = rows.length

        //mostrar a pagina com os dados
        return res.render("search-results.html", { places: rows, total})
    })
   
})

//ligar servidor
server.listen(3000)