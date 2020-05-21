const con = require("../connection")
async function getStartingPoints(req, res) {
    const query = "select * from ponto_partida;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addStartingPoint(req, res) {
    const { ponto_partida } = req.body
    const query = `INSERT INTO ponto_partida (ponto_partida) VALUES ('${ponto_partida}')`
    con.query(query, function (err, results) {
        if (err) {
            return res.send(err);
        }
        res.send(results)
    });
}

async function deleteStartingPoint(req, res) {
    const { id } = req.params
    const query = `delete from ponto_partida where id_ponto_partida = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function editStartingPoint(req, res) {
    const { id } = req.params
    const { ponto_partida} = req.body
    let set = []
    if (ponto_partida) {
        set.push(`ponto_partida = "${ponto_partida}"`) 
    }
    const query = `update ponto_partida set ${set.join()} where id_ponto_partida = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getStartingPoints, addStartingPoint, deleteStartingPoint, editStartingPoint}