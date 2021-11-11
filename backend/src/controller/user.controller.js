// const jwt = require("jsonwebtoken")
// require("dotenv").config()
const express = require("express");
const router = express.Router();

const User = require("../model/user.model");

// const newToken = (user) => {
//     return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY)
// }

router.post("/login", async (req, res) => {
  try {
    console.log("reached", req);
    console.log(req.body);
    // const user = User.create(req.body)
    res.status(200).send("success");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = router;
