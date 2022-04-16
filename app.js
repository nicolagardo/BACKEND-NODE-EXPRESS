const express = require ("express")
const cors = require("cors")
const colors = require("colors")
const app = express()
const dbConnect = require('./config/mongo')

require("dotenv").config()


app.use(cors())

const port = process.env.PORT || 3000

/**
 * Aqui invocamos a las rutas
 */

// NOTE: localhost/api/____________
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`.bgYellow);
})

dbConnect()