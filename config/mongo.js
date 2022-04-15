const res = require("express/lib/response");
const mongoose = require("mongoose")
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err, res) => {
        !err ? console.log('***CONEXION CORRECTA***'.green): console.log('***ERROR DE CONEXION***'.red);;
    }
    )
}

module.exports = dbConnect