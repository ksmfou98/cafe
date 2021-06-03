import Joi from "joi";
import User from "../models/user";

// 회원가입
export const register = async (req, res) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
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

    const token = user.generateToken(); // 토큰 생성

    // 응답할 데이터에서 password 필드 제거
    const data = user.serialize();
    res
      .cookie("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      })
      .status(200)
      .json({
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
export const login = async (req, res) => {
  const { username, password } = req.body;

  // username, password가 없으면 에러 처리
  if (!username || !password) {
    return res.status(401).json({ success: "정보가 입력되지 않았습니다" });
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러처리
    if (!user) {
      res.status(401).json({
        success: "계정이 존재하지 않습니다",
      });
    }

    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      return res.status(401).json({
        success: false,
      });
    }

    const token = user.generateToken();

    const data = user.serialize();
    res
      .cookie("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        user: data,
      });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

// 로그인 상태 확인
export const check = async (req, res) => {
  const { user } = res.locals; // jwtMiddleware에서 전역변수 설정을 했음
  if (!user) {
    // 로그인 중 아님
    return res.status(401).json({ success: false });
  }
  res.status(200).json({ success: true, user });
};

// 로그아웃
export const logout = async (req, res) => {
  res.cookie("access_token").status(204);
};
