const mongoose = require("mongoose")

const communityDiscussionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userName: { type: String, required: true },
    votes: { type: Number, required: true },
    comments: { type: Number, required: true },
    days: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false

})

module.exports = mongoose.model("communityDiscussion", communityDiscussionSchema)