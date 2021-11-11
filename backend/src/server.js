const port = 2345
const express = require("express");
const app = express();
const connect = require("./config/db.js");

const cors = require('cors')
app.use(cors())

const discussionController = require("./controller/communityDiscussion.controller")
const userController = require("./controller/user.controller")

app.use(express.json());


// discussion controler
app.use("/discussion", discussionController);
app.use("/user", userController);


app.listen(port, async function () {
    await connect()
    console.log(`listning on the port ${port}`)
});