const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postCategory: {
    type: String,
    requireed: true,
  },
  //////////////////////////////
  ///////NEW//////////////////
  ///////////////////////////
  test1: {
    type: String,
    required: true,
  },
  test2: {
    type: String,
    required: true,
  },
  test3: {
    type: String,
    requireed: true,
  },
  test4: {
    type: String,
    required: true,
  },
  test5: {
    type: String,
    requireed: true,
  },
  //////////////////////////////
  ///////NEW//////////////////
  ///////////////////////////
});
//database schema
module.exports = mongoose.model("Posts", postSchema);
