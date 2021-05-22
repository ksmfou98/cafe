import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    body: String,
    tags: [String], // 문자열로 이루어진 배열
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
