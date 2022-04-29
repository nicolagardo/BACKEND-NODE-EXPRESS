const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem } = require("../controllers/tracks")

//INFO: http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", getItem);

router.post("/", createItem);



module.exports = router