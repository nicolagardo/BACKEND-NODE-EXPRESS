const express = require("express")
const router = express.Router()

//INFO: http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", (req, res) => {
    const data = ["hello", "mundo"]
    res.send({data}) // NOTE: data:data = {data}
})


module.exports = router