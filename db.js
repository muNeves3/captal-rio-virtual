const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./botao.db')

db.serialize(function() {

    //criar tabela
    db.run(
        `CREATE TABLE IF NOT EXISTS botao(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            quantidade INTEGER

        );`
    )

    // INSERIR DADO NA TABELA
    const query = `
    INSERT INTO botao(
        quantidade
    ) VALUES(?);
`
    const values = [0]

    db.run(query, values, function(err) {
        if (err) return console.log(err)

         console.log(this)
     })

    //CONSULTAR DADO NA TABELA
    db.all(`SELECT * FROM botao`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })

})

module.exports = db