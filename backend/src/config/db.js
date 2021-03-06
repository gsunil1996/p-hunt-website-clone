const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect = () => {
    return mongoose.connect(process.env.MONGO_ATLAS_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    });
};

module.exports = connect;