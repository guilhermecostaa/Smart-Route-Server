const con = require("../connection")
async function getLocationType(req, res) {
    const query = "select * from tipo_localizacao;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addLocationType(req, res) {
    const { tipo_localizacao} = req.body
    const query = `insert into tipo_localizacao (tipo_localizacao) values (${tipo_localizacao})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getLocationType, addLocationType}