import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
import cafeRouter from "./routers/cafeRouter";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 라우터
app.use("/api/v1/user", userRouter);
app.use("/api/v1/cafe", cafeRouter);

app.use("/uploads", express.static("uploads")); // 이걸 해줌으로써 http://localhost:4000/uploads/1625692%E1%85%AE%208.39.33.png 이런식으로 접속해서 이미지볼수있음

// DB 실행
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connect ✅ MongoDB Connected.... "))
  .catch((err) => console.log(err));

// 서버 실행
app.listen(PORT, () => {
  console.log(`connect ✅ http://localhost:${PORT}`);
});
