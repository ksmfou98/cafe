import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPost {
  title: string;
  content: string;
  cafe: string;
  board: string;
  writer: string;
  like_count: number;
  like_users: { user: string; like: string }[];
  comments: string[];
}
export interface IPostMethod extends IPost, Document {}
export interface IPostStatics extends Model<IPostMethod> {}

const PostSchema: Schema<IPostMethod> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    content: {
      type: String,
      required: true,
    },
    cafe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cafe",
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    like_count: {
      type: Number,
      default: 0,
    },
    like_users: [
      {
        user: mongoose.Schema.Types.ObjectId,
        like: String, // good , bad
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model<IPostMethod, IPostStatics>("Post", PostSchema);

export default Post;
