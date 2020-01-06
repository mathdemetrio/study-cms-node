import express from "express";
import Post from "../models/post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { slug } = req.body;
  try {
    if (await Post.findOne({ slug })) {
      return res.status(400).send({ error: "Slug already exists" });
    }
    const post = await Post.create(req.body);
    return res.send({ post });
  } catch (err) {
    return res.status(400).send({ error: "Post creation failed" });
  }
});

router.delete("/", async (req, res) => {
  const { slug } = req.body;
  try {
    await Post.deleteOne({ slug });
    return res.send({ success: `Post ${slug} deleted` });
  } catch (err) {
    return res.status(400).send({ error: "Post deletion failed" });
  }
});

export default app => app.use("/post", router);
