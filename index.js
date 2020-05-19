const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./routes/routes.route")(app)
require("./routes/startingPoints.route")(app)
require("./routes/routeType.route")(app)
require("./routes/transportType.route")(app)
require("./routes/location.route")(app)
require("./routes/locationType.route")(app)
app.listen(port, () => console.log("listening on Port " + port))