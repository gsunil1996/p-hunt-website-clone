const mongoose = require("mongoose");


// to use mongodb we need to start database server i.e. using command mongod
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/productHunt")
}


module.exports = connect