const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/blogSearch", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/search", async (req, res) => {
  const { query, filter } = req.query;
  const sortOption = filter === "recent" ? { createdAt: -1 } : { views: -1 };

  const results = await Blog.find({
    title: { $regex: query, $options: "i" },
  }).sort(sortOption);

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
