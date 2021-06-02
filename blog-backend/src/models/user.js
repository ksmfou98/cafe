import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

// 응답할 데이터에서 password 필드 제거
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

// 토큰 발급하기
UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣는다.
    {
      expiresIn: "7d", // 7일 동안 유효함
    }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);
export default User;
