const mysql = require('mysql')
const con = mysql.createConnection({
    host: "35.197.213.232",
    user: "smartroute",
    password: "smartroute",
    database: "smartroute",
})

con.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})

module.exports = con