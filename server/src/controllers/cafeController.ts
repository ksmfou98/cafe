import { Request, Response } from "express";
import Cafe from "../models/cafe";
import multer from "multer";

// multer-optional
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("cafe_img");

// 이미지 업로드
export const uploadImg = (req: Request, res: Response) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

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

// 내 카페 리스트 조회
export const readMyCafeList = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const cafes = await Cafe.find({ manager: userId });
    return res.status(200).json({
      success: true,
      cafes,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 전체 카페 리스트 조회
export const readAllCafeList = async (req: Request, res: Response) => {
  try {
    const cafes = await Cafe.find();
    return res.status(200).json({
      success: true,
      cafes,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};
