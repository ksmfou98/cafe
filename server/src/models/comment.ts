import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment {
  postId: string;
  writer: string;
  content: string;
  reply: {
    _id?: string;
    writer: string;
    content: string;
    responseTo: string;
  }[];
}

export interface ICommentMethod extends IComment, Document {}
export interface ICommentStatics extends Model<ICommentMethod> {}

const CommentSchema: Schema<ICommentMethod> = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    reply: [
      {
        type: new mongoose.Schema(
          {
            writer: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            content: {
              type: String,
              required: true,
              trim: true,
            },
            responseTo: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
          },
          { timestamps: true }
        ),
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model<ICommentMethod, ICommentStatics>(
  "Comment",
  CommentSchema
);

export default Comment;
