import { NextFunction, Request, Response } from "express";

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.user) {
    // 로그인 했을 경우 userAuth에서 locals.user 저장했음
    // 로그인이 안됐을 경우
    return res.status(401).json({
      success: false,
      message: "로그인 하지 않았습니다.",
    });
  }
  return next();
};

export default checkLoggedIn;

// 이 미들웨어는 로그인 상태가 아니라면 401 HTTP Status를 반환하고 ,
// 그렇지 않으면 그다음 미들웨어를 실행한다.