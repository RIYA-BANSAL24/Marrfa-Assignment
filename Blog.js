const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    views: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
