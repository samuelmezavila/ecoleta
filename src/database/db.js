//importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

// criar o objeto de operações do banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para operações
db.serialize(() => {
    //criando tabela
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
 //           name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//       );
//    `)

    //inserir dados na tabela
//    const query = `
//        INSERT INTO places (
//            image,
//            name,
//            address,
//            address2,
//            state,
//            city,
//           items
//        ) VALUES (?,?,?,?,?,?,?);
//    `
    
//    const values = [
//        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//        "Papaersider",
//        "Guilherme Gemballa, Jardim América",
//        "Numero 260",
//        "Santa Catarina",
//        "Rio do Sul",
//        "Resíduos Eletrônicos, Lampadas"
//    ]

//    function afterInsertData(err){
//        if(err){
//            return console.log(err)
//       }
//        console.log("Cadastrado com Sucesso")
//        console.log(this)
//    }

//    db.run(query, values, afterInsertData)

    //consultar dados
   // db.all(`SELECT name FROM places`, function(err, rows){
   //     if(err){
   //         return console.log(err)
   //     }
   //     console.log("Aqui estão seus registros")
   //     console.log(rows)
   // })

    //deletar dados
   // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
   //     if(err){
   //         return console.log(err)
   //     }
   //     console.log("Registro deletado")
   // })
})