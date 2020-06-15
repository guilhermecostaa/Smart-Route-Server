const jwt = require("jsonwebtoken")
const config = require("../config")
const messages = require("../messages")
const con = require("../connection")

module.exports = (req, res, next) => {
    // gets request "authorization" header
    const authHeader = req.headers.authorization

    // if "authorization" does not exist
    if (!authHeader) {
        return res.status(messages.token.missing.status).send(messages.token.missing)
    }

    // splits "authorization" header
    const parts = authHeader.split(" ")


    // a token has this layout: "Bearer + token"
    if (parts.length !== 2) {
        return res.status(messages.token.malformated.status).send(messages.token.malformated)
    }

    const [bearer, token] = parts

    if (bearer !== "Bearer") {
        return res.status(messages.token.malformated.status).send(messages.token.malformated)
    }


    // verifies token integrity
    jwt.verify(token, config.secret, async (err, decoded) => {
        if (err) {
            return res.status(messages.token.invalid.status).send(messages.token.invalid)
        }

        const query = `select * from user where user_id = "${decoded.id}"`
        con.query(query, (err, results, fields) => {
            if (err) {
                return res.status(messages.token.malformated.status).send(messages.token.malformated)
            }
            if (!results.length) {
                return res.status(messages.error().status).send(messages.error("error", "User not Found"))
            }
            const user = results[0];
            req.loggedUserId = decoded.id
            res.send(messages.getSuccess("signIn", generateToken(user.id),
                {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }))
        })

        // stores variables into req object

        switch (decoded.profileId) {
            case 1: req.loggedUserProfile = "student"; break
            case 2: req.loggedUserProfile = "proponent"; break
            case 3: req.loggedUserProfile = "admin"; break
        }
        return next()
    })

}