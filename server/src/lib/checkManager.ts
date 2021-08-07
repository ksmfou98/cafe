import { NextFunction, Request, Response } from "express";
import Cafe from "../models/cafe";

const checkManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cafeId, managerId } = req.body;
  try {
    const cafe = await Cafe.findOne({
      _id: cafeId,
      manager: managerId,
    });

    if (!cafe) {
      return res.status(400).json({
        success: false,
        message: "카페가 존재하지 않거나 , 매니저가 아닙니다.",
      });
    }

    return next();
  } catch (e) {
    return res.status(500).json({
      message: "check Manager 미들웨어 오류",
      e,
    });
  }
};

export default checkManager;
