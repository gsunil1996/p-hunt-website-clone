const express = require("express")
const router = express.Router();

const Discussion = require("../model/communityDiscussion.model")

router.post("", async (req, res) => {
    res.send("success")
})

router.get("", async (req, res) => {

    try {
        const page = +req.query.page || 1
        const size = +req.query.size || 10

        const offset = (page - 1) * size
        const totalPages = Math.ceil(await (Discussion.find().countDocuments()) / size)
        // const user = await User.find().lean().exec();
        const discussion = await Discussion.find().skip(offset).limit(size).lean().exec();
        return res.status(200).json({ data: discussion, totalPages })
    } catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})


module.exports = router;