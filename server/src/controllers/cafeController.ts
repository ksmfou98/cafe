import { Request, Response } from "express";
import Cafe from "../models/cafe";

// 카페 생성
export const create = async (req: Request, res: Response) => {
  const { name, thumbnail, route, manager } = req.body;

  try {
    // 카페 이름이 이미 존재하는지 확인
    const cafeNameExist = await Cafe.findOne({
      name,
    });
    if (cafeNameExist) {
      return res.status(409).json({
        success: false,
        message: "카페이름이 이미 존재합니다.",
      });
    }

    // 카페 라우터가 이미 존재하는지 확인
    const cafeRouteExist = await Cafe.findOne({
      route,
    });

    if (cafeRouteExist) {
      return res.status(409).json({
        success: false,
        message: "카페 주소가 이미 존재합니다.",
      });
    }

    let cafe = new Cafe(req.body);
    cafe = await cafe.populate("manager").execPopulate(); // save 하기 전에 populate 한번 하는거임

    await cafe.save();

    return res.status(201).json({
      success: true,
      cafe,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
