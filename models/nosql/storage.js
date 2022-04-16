const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:Number
        },
             
    },
    {
        timestamps:true, //INFO: createAt, updatedAT
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StorageSchema)