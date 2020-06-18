const con = require("../connection")
const jwt = require("jsonwebtoken")
const config = require("../config")
const messages = require("../messages")

function generateToken(userId) {
    return jwt.sign({
        id: userId,
    }, config.secret, {
        expiresIn: 3600 * 24 * 7
    })
}

async function signUp(req, res) {
    const { name, email, password } = req.body
    const query = `insert into user (name, email, password) values ("${name}", "${email}", "${password}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("signUp", results))
    })
}

async function signIn(req, res) {
    const { name, password } = req.body

    if (!name || !password) {
        return res.status(400).send({ error: "Missing arguments." })
    }

    const query = `select * from user where name = "${name}" and password = "${password}"`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        if (!results.length) {
            return res.status(messages.error().status).send(messages.error("error", "User not Found"))
        }
        const user = results[0];
        user.id = user.id_user;
        delete user.id_user;
        res.send(messages.getSuccess("signIn",{ 
            jwt: generateToken(user.id),
            user
        }))
    })
}


module.exports = { signUp, signIn }