const express = require("express")
const router = express.Router()
const fs = require("fs")

const PATH_ROUTES = __dirname; //INFO: Direccion de directorio en la maquina

const removeExtension = (fileName) => {
    // NOTE: tracks.js  [tracks, js] extraemos la extension
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) // NOTE puede llegar index o tracks, storage, users etc..
    //console.log(file)
    // NOTE http://localhost:3000/api/(tracks, users, storage)
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`))
        //console.log(name)

    }
})
//console.log({a});

debugger

module.exports =router