import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBoard {
  name: string;
  cafe: string;
}
export interface IBoardMethod extends IBoard, Document {}
export interface IBoardStatics extends Model<IBoardMethod> {}

const BoardSchema: Schema<IBoardMethod> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    cafe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cafe",
    },
  },
  { timestamps: true }
);

const Board = mongoose.model<IBoardMethod, IBoardStatics>("Board", BoardSchema);

export default Board;
