const con = require("../connection")
async function getUsers(req, res) {
    const query = "select * from user;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addUser(req, res) {
    const { name, email, password} = req.body
    const query = `insert into user (name, email, password) values ("${name}", "${email}", "${password}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function deleteUser(req, res) {
    const { id } = req.params
    const query = `delete from user where id_user = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function editUser(req, res) {
    const { id } = req.params
    const { name, email, password} = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    if (email) {
        set.push(`email = "${email}"`) 
    }
    if (password) {
        set.push(`password = "${password}"`) 
    }
    
    const query = `update user set ${set.join()} where id_user = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}


module.exports = { getUsers, addUser, deleteUser, editUser}