const con = require("../connection")
async function getLocation(req, res) {
    const query = "select * from localizacao;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addLocation(req, res) {
    const { nome, desc, idTipoLocalizacao, imagem} = req.body
    const query = `insert into localizacao (nome, desc, idTipoLocalizacao, imagem) values (${nome}, ${desc}, ${idTipoLocalizacao}, ${imagem})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getLocation, addLocation}