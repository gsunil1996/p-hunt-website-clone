// const jwt = require("jsonwebtoken")
// require("dotenv").config()
const express = require("express")
const router = express.Router();

const User = require("../model/user.model")

// const newToken = (user) => {
//     return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY)
// }

router.post("/login", async (req, res) => {
    try {
        console.log(req.body.email)
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            user = await User.create({
                email: req.body.email,
                imageUrl: req.body.imageUrl,
                googleId: req.body.googleId,
                name: req.body.name,
                givenName: req.body.givenName,
                familyName: req.body.familyName,
            })
        }
        res.status(200).send(user)

    } catch (err) {
        console.log(err.message)
        res.status(401).send(err.message)
    }
})


module.exports = router