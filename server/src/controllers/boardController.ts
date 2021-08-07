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

// 게시판 목록 조회
export const readBoardList = async (req: Request, res: Response) => {
  const { cafeId } = req.params;
  try {
    const boards = await Board.find({
      cafe: cafeId,
    });

    return res.status(200).json({
      success: true,
      boards,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시판 수정
export const update = async (req: Request, res: Response) => {
  const { boardId, name } = req.body;
  try {
    const board = await Board.findByIdAndUpdate(
      { _id: boardId },
      { name },
      { new: true }
    );
    if (!board) {
      return res.status(400).json({
        success: false,
        message: "해당 게시판이 존재하지 않습니다.",
      });
    }

    return res.status(200).json({
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
