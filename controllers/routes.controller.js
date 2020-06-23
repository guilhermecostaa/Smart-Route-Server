const con = require("../connection")
const jwt = require("jsonwebtoken")
const config = require("../config")
const messages = require("../messages")

async function getRoutes(req, res) {
    const query = "select * from view_rotas;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getRoutes", results))
    })
}

async function addRoute(req, res) {
    const { idPontoPartida, idTipoTransporte, idTipoRota, numDias, numPessoas} = req.body
    const query = `insert into rotas (id_ponto_partida, id_modo_transporte, id_tipo_Rota, num_dias, num_pessoas) values (${idPontoPartida}, ${idTipoTransporte}, ${idTipoRota}, ${numDias}, ${numPessoas})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addRoute", results))
    })
}

async function deleteRoute(req, res) {
    const { id } = req.params
    const query = `delete from rotas where id_rota = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteRoute", results))
    })
}

async function editRoute(req, res) {
    const { id } = req.params
    const { idPontoPartida, idTipoTransporte, idTipoRota, numDias, numPessoas} = req.body
    let set = []
    if (idPontoPartida) {
        set.push(`id_ponto_partida = "${idPontoPartida}"`) 
    }
    if (idTipoTransporte) {
        set.push(`id_modo_transporte = "${idTipoTransporte}"`) 
    }
    if (idTipoRota) {
        set.push(`id_tipo_Rota = "${idTipoRota}"`) 
    }
    if (numDias) {
        set.push(`num_dias = "${numDias}"`) 
    }
    if (numPessoas) {
        set.push(`num_pessoas = "${numPessoas}"`) 
    }
    const query = `update rotas set ${set.join()} where id_rota = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editRoute", results))
    })
}

module.exports = { getRoutes, addRoute, deleteRoute, editRoute}