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
    const query = `insert into localizacao (nome, descricao, id_tipo_localizacao, imagem) values ("${nome}", "${descricao}", "${id_tipo_localizacao}", "${imagem}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function deleteLocation(req, res) {
    const { id } = req.params
    const query = `delete from localizacao where id_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function editLocation(req, res) {
    const { id } = req.params
    const { nome, descricao, id_tipo_localizacao, imagem} = req.body
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
    
    const query = `update localizacao set ${set.join()} where id_localizacao = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getLocation, addLocation, deleteLocation, editLocation}