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
    const { startingPoint } = req.body
    const query = `INSERT INTO ponto_partida (ponto_partida) VALUES ('${startingPoint}')`
    con.query(query, function (err, results) {
        if (err) {
            return res.send(err);
        }
        res.send(results)
    });
}

module.exports = { getStartingPoints, addStartingPoint }