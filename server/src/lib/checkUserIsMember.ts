import { NextFunction, Request, Response } from "express";
import Cafe from "../models/cafe";

const checkUserIsMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cafeId } = req.params;

  try {
    const cafe = await Cafe.findById({ _id: cafeId });

    const isMember = cafe.members.some(
      (member: any) => member._id.toString() === res.locals.user._id
    ); // some : true or false 반환

    if (!isMember) {
      return res.status(400).json({
        success: false,
        message: "유저가 카페에 가입하지 않았습니다.",
      });
    }

    return next();

    console.log(isMember);
  } catch (e) {
    return res.status(500).json({
      message: "check User Is Member 오류",
      e,
    });
  }
};

export default checkUserIsMember;
