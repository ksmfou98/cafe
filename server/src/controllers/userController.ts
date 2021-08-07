import { Request, Response } from "express";
import User from "../models/user";

// 회원가입
export const register = async (req: Request, res: Response) => {
  const { email, password, name, nickname } = req.body;

  try {
    // email 이미 존재하는지 확인
    const exist = await User.findByEmail(email);
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "email is exist",
      });
    }

    const user = new User({ email, name, nickname });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    const token = await user.generateToken(); // 토큰 생성

    // 응답할 데이터에서 password 필드 제거
    const data = user.serialize();

    res.cookie("user", token).status(200).json({
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
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // email , password 가 만약에 안들어왔으면 정보가 안들어온거니깐 에러처리를 하자
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "정보가 입력되지 않았습니다 !",
    });
  }

  try {
    // 이메일이 존재하는지 확인
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "계정이 존재하지 않습니다 !",
      });
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "잘못된 비밀번호 입니다",
      });
    }

    const token = await user.generateToken();
    const data = user.serialize();

    res.cookie("user", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

// 로그아웃
export const logout = async (req: Request, res: Response) => {
  res.cookie("user", "").status(200).json({
    success: true,
    message: "로그아웃 성공!",
  });
};
