const con = require("../connection")
const messages = require("../messages")

async function getLocation(req, res) {
    const query = "select * from view_localizacao;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getLocation", results))
    })
}

async function addLocation(req, res) {
    const { nome, descricao, id_tipo_localizacao, imagem, latitude, longitude} = req.body
    const query = `insert into localizacao (nome, descricao, id_tipo_localizacao, imagem, latitude, longitude) values ("${nome}", "${descricao}", "${id_tipo_localizacao}", "${imagem}",  "${latitude}",  "${longitude}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addLocation", results))
    })
}

async function deleteLocation(req, res) {
    const { id } = req.params
    const query = `delete from localizacao where id_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteLocation", results))
    })
}

async function editLocation(req, res) {
    const { id } = req.params
    const { nome, descricao, id_tipo_localizacao, imagem, latitude, longitude} = req.body
    let set = []
    if (nome) {
        set.push(`nome = "${nome}"`) 
    }
    if (descricao) {
        set.push(`descricao = "${descricao}"`) 
    }
    if (id_tipo_localizacao) {
        set.push(`id_tipo_localizacao = "${id_tipo_localizacao}"`) 
    }
    if (imagem) {
        set.push(`imagem = "${imagem}"`) 
    }
    if (latitude) {
        set.push(`imagem = "${latitude}"`) 
    }
    if (longitude) {
        set.push(`imagem = "${longitude}"`) 
    }
    
    const query = `update localizacao set ${set.join()} where id_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editLocation", results))
    })
}

module.exports = { getLocation, addLocation, deleteLocation, editLocation}