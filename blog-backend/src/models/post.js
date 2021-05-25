import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    tags: [String], // 문자열로 이루어진 배열
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
