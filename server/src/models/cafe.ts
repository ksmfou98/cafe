import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICafe {
  name: string;
  thumbnail: string;
  route: string;
  members: string[];
  manager: string;
}
export interface ICafeMethod extends ICafe, Document {}
export interface ICafeStatics extends Model<ICafeMethod> {}

const CafeSchema: Schema<ICafeMethod> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 30,
      minlength: 2,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: true,
    },
    route: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 20,
      minlength: 4,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cafe = mongoose.model<ICafeMethod, ICafeStatics>("Cafe", CafeSchema);

export default Cafe;
