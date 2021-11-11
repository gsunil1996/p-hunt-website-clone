const express = require("express")
const router = express.Router();

const Discussion = require("../model/communityDiscussion.model")

router.post("", async (req, res) => {
    res.send("success")
})

router.get("", async (req, res) => {
    res.send("success")
})


module.exports = router;