import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const UserSchema = new Schema({
  username: String,
  password: String,
});

// 비밀번호 hash
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, saltRounds);
  this.password = hash;
};

// 입력받은 비밀번호 , 디비에 저장된 비밀번호 비교
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result; // true or false
};

// 아이디가 디비에 있는지 확인
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};


const User = mongoose.model("User", UserSchema);
export default User;
