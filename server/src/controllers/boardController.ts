import { Request, Response } from "express";
import Board from "../models/board";

// 게시판 생성
export const createBoard = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { cafeId } = req.params;
  try {
    const boards = await Board.find({ cafe: cafeId });
    const exist = boards.find((f) => f.name === name);

    if (exist) {
      return res.status(409).json({
        success: false,
        message: "해당 게시판이 이미 존재합니다.",
      });
    }

    const board = new Board({ name, cafe: cafeId });
    await board.save();

    return res.status(201).json({
      success: true,
      boards: boards.concat(board),
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
export const updateBoard = async (req: Request, res: Response) => {
  const { boardId, name } = req.body;
  const { cafeId } = req.params;
  try {
    // 기존에 이미 있는 게시판으로는  수정 불가능하게 설정
    const exist = await Board.findOne({
      cafe: cafeId,
      name,
    });

    if (exist) {
      return res.status(409).json({
        success: false,
        message: "이미 존재하는 게시판 입니다.",
      });
    }

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
    const boards = await Board.find({ cafe: cafeId });
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

// 게시판 삭제
export const deleteBoard = async (req: Request, res: Response) => {
  const { cafeId, boardId } = req.params;
  try {
    const board = await Board.findOneAndDelete({
      _id: boardId,
      cafe: cafeId,
    });

    if (!board) {
      return res.status(400).json({
        success: false,
        message: "해당 게시판이 존재하지 않습니다",
      });
    }

    const boards = await Board.find({ cafe: cafeId });

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
