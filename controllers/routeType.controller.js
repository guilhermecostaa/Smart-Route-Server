const con = require("../connection")
async function getRouteType(req, res) {
    const query = "select * from tipo_rota;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addRouteType(req, res) {
    const { tipo_rota } = req.body
    const query = `INSERT INTO tipo_rota (tipo_rota) VALUES ('${tipo_rota}')`
    con.query(query, function (err, results) {
        if (err) {
            return res.send(err);
        }
        res.send(results)
    });
}


async function deleteRouteType(req, res) {
    const { id } = req.params
    const query = `delete from tipo_rota where id_tipo_rota = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function editRouteType(req, res) {
    const { id } = req.params
    const { tipo_rota } = req.body
    let set = []
    if (tipo_rota) {
        set.push(`tipo_rota = "${tipo_rota}"`)
    }
    const query = `update tipo_rota set ${set.join()} where id_tipo_rota = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getRouteType, addRouteType, deleteRouteType, editRouteType}