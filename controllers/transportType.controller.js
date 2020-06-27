const con = require("../connection")
const messages = require("../messages")

async function getTransportType(req, res) {
    const query = "select * from modo_transporte;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getTransportType", results))
    })
}

async function addTransportType(req, res) {
    const { modo_transporte } = req.body
    const query = `INSERT INTO modo_transporte (modo_transporte) VALUES ("${modo_transporte}")`
    con.query(query, function (err, results) {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addTransportType", results))
    });
}

async function deleteTransportType(req, res) {
    const { id } = req.params
    const query = `delete from modo_transporte where id_modo_transporte = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteTransportType", results))
    })
}

async function editTransportType(req, res) {
    const { id } = req.params
    const { modo_transporte } = req.body
    let set = []
    if (modo_transporte) {
        set.push(`modo_transporte = "${modo_transporte}"`)
    }
    const query = `update modo_transporte set ${set.join()} where id_modo_transporte = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editTransportType", results))
    })
}

module.exports = { getTransportType, addTransportType, deleteTransportType, editTransportType }