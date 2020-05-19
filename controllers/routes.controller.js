const con = require("../connection")
async function getRoutes(req, res) {
    const query = "select * from view_rotas;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addRoute(req, res) {
    const { idPontoPartida, idTipoTransporte, idTipoRota, numDias, numPessoas} = req.body
    const query = `insert into rota (id_ponto_partida, id_tipo_transporte, id_tipo_Rota, num_dias, num_pessoas) values (${idPontoPartida}, ${idTipoTransporte}, ${idTipoRota}, ${numDias}, ${numPessoas})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function editRoute(req, res) {
    const { pontoPartida, tipoTransporte, tipoRota} = req.body
    const query = `insert into rota values (${pontoPartida}, ${tipoTransporte}, ${tipoRota})`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getRoutes, addRoute, editRoute}