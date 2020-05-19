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
    const { routeType } = req.body
    const query = `INSERT INTO tipo_rota (tipo_rota) VALUES ('${routeType}')`
    con.query(query, function (err, results) {
        if (err) {
            return res.send(err);
        }
        res.send(results)
    });
}

module.exports = { getRouteType, addRouteType }