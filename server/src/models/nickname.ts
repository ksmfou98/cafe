import mongoose, { Document, Model, Schema } from "mongoose";

export interface INickname {}
export interface INicknameMethod extends INickname, Document {}
export interface INicknameStatics extends Model<INicknameMethod> {}

const NicknameSchema: Schema<INicknameMethod> = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      maxlength: 15,
      minlength: 2,
    },

    cafe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cafe",
    },
  },
  { timestamps: true }
);

const Nickname = mongoose.model<INicknameMethod, INicknameStatics>(
  "Nickname",
  NicknameSchema
);

export default Nickname;
