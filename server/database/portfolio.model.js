const mongoose = require("mongoose");
const db = require("./index.js");

const feedSchema = new mongoose.Schema({
    id:Number,
    title:String,
    content:String,
    author:String
})

const feed = mongoose.model("feed",feedSchema);

module.exports = feed;