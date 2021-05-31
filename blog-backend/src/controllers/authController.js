import Joi from "joi";
import User from "../models/user";

// 회원가입
export const register = async (req, res) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  console.log(`schema : ${schema}`);
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ success: false });
  }

  const { username, password } = req.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      return res.status(409).json({
        success: "isExist",
      });
    }

    const user = new User({ username });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터 베이스에 저장

    // 응답할 데이터에서 password 필드 제거
    const data = user.serialize();
    res.status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

// 로그인
export const login = async (req, res) => {};

// 로그인 상태 확인
export const check = async (req, res) => {};

// 로그아웃
export const logout = async (req, res) => {};
