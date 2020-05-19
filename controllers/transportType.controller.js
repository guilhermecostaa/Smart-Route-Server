const con = require("../connection")
async function getTransportType(req, res) {
    const query = "select * from modo_transporte;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addTransportType(req, res) {
    const { transportType } = req.body
    const query = `INSERT INTO modo_transporte (modo_transporte) VALUES ('${transportType}')`
    con.query(query, function (err, results) {
        if (err) {
            return res.send(err);
        }
        res.send(results)
    });
}

module.exports = { getTransportType, addTransportType }