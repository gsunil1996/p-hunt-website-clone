const mongoose = require("mongoose")

const communityDiscussionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    votes: [{ type: String, required: false }],
    comments: [{
        title: String,
        userReference: String,
    }]
})

module.exports = mongoose.model("communityDiscussion", communityDiscussionSchema)