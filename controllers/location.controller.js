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
    const { nome, descricao, id_tipo_localizacao, imagem} = req.body
    const query = `insert into localizacao (nome, descricao, id_tipo_localizacao, imagem) values (${nome}, ${descricao}, ${id_tipo_localizacao}, ${imagem})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getLocation, addLocation}