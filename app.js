const express = require ("express")
const cors = require("cors")
const colors = require("colors")
const app = express()
require("dotenv").config()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`.green);
})