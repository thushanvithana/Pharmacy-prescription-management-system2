const mongose = require("mongoose");
const Schema = mongose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorname: { type: String, required: true },
  articleImage: { type: String, required: true },
  postDate: { type: Date, default: Date.now },
});
const Articles = mongose.model("Articles", articleSchema);
module.exports = Articles;
