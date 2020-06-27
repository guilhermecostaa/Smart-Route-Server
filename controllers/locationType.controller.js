const con = require("../connection")
const messages = require("../messages")

async function getLocationType(req, res) {
    const query = "select * from tipo_localizacao;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getLocationType", results))
    })
}

async function addLocationType(req, res) {
    const { tipo_localizacao } = req.body
    const query = `insert into tipo_localizacao (tipo_localizacao) values ("${tipo_localizacao}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addLocationType", results))
    })
}

async function deleteLocationType(req, res) {
    const { id } = req.params
    const query = `delete from tipo_localizacao where id_tipo_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteLocationType", results))
    })
}

async function editLocationType(req, res) {
    const { id } = req.params
    const { tipo_localizacao } = req.body
    let set = []
    if (tipo_localizacao) {
        set.push(`tipo_localizacao = "${tipo_localizacao}"`)
    }
    const query = `update tipo_localizacao set ${set.join()} where id_tipo_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editLocationType", results))
    })
}

module.exports = { getLocationType, addLocationType, deleteLocationType, editLocationType }