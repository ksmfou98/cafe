import { Request, Response } from "express";
import Board from "../models/board";

// 게시판 생성
export const create = async (req: Request, res: Response) => {
  const { name, cafeId } = req.body;
  try {
    const board = new Board({ name, cafe: cafeId });
    await board.save();

    return res.status(201).json({
      success: true,
      board,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
