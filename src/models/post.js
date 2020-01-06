import mongoose from "../database/index.js";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  content: {
    type: String,
    required: false
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
