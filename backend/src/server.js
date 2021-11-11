const express = require("express")
const app = express()

const connect = require("./config/db")

const port = 4567

app.use(express.json())

app.listen(port, async () => {
    await connect();
    console.log(`listening at port ${port}`)
})
