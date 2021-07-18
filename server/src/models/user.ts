import mongoose, { Document, Model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds: number = 10;

export interface IUser {
  email: string;
  password: string;
  name: string;
  wage: number;
  status: string;
  token: string;
  role: string;
}

export interface IUserMethod extends IUser, Document {
  setPassword: (password: string) => Promise<void>;
  generateToken: () => Promise<string>;
  serialize: () => Promise<JSON>;
  checkPassword: (password: string) => Promise<boolean>;
}

export interface IUserStatics extends Model<IUserMethod> {
  findByEmail: (email: string) => Promise<IUserMethod>;
}

const UserSchema: Schema<IUserMethod> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
      validate(value: string) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password can not contain a word password");
        }
      },
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

// 이메일이 디비에 있는지 확인
UserSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email });
};

// 입력받은 비밀번호, 디비에 저장된 비밀번호 비교
UserSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.password);
  return result; // true or false
};

// 비밀번호 hash
UserSchema.methods.setPassword = async function (password: string) {
  const hash = await bcrypt.hash(password, saltRounds);
  this.password = hash;
};

// 토큰 발급하기
UserSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      role: this.role,
    },
    process.env.JWT_SECRET
  );
  this.token = token;

  await this.save();
  return token;
};

// 응답할 데이터에서 password 필드 제거
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

const User = mongoose.model<IUserMethod, IUserStatics>("User", UserSchema);

export default User;