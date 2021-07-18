import { Request, Response } from "express";
import User from "../models/user";

// 회원가입
export const register = async (req: Request, res: Response) => {
  const { email, password, name, phoneNumber, address, addressDetail } =
    req.body;

  try {
    // email 이미 존재하는지 확인
    const exist = await User.findByEmail(email);
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "email is exist",
      });
    }

    const user = new User({ email, name, phoneNumber, address, addressDetail });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    const token = await user.generateToken(); // 토큰 생성

    // 응답할 데이터에서 password 필드 제거
    const data = user.serialize();

    res.cookie("x_auth", token).status(200).json({
      success: true,
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

