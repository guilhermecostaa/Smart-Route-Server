const mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "12345",
    database: "smartroute_db",
})

con.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})

module.exports = con