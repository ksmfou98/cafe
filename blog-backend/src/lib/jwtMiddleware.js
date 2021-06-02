import jwt from "jsonwebtoken";

const jwtMiddleware = (req, res, next) => {
  // 쿠키 생성은 res.cookie("쿠키이름", 쿠키값) 이고
  // 쿠키 가져오는 거는 req.cookies.쿠키이름 임
  const token = req.cookies.access_token;
  if (!token) return next(); // 토큰이 없을 때
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = {
      // res.locals는 전역변수를 만드는것임 그러므로 다른곳에서 user을 사용할 수 있음
      _id: decoded._id,
      username: decoded.username,
    };
    console.log(decoded);
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

export default jwtMiddleware;
