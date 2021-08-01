import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
import cafeRouter from "./routers/cafeRouter";
import cors from "cors";
// 여기서부터 웹소켓 테스트
import http from "http";
// import socketio from "socket.io";
import { Server, Socket } from "socket.io";

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

const server = http.createServer(app);

// 서버 실행
server.listen(PORT, () => {
  console.log(`connect ✅ http://localhost:${PORT}`);
});

/* 
본격적인 소켓 로직
아래 보면 기본 연결을 제외하고 설정해놓은 연결이 총 6개가 있다
- newUser / enter : 접속했을 때(닉네임을 입력하고 확인을 클릭했을 때)
- message / upload : 채팅 업로드(채팅을 입력하고 엔터 혹은 확인을 눌렀을 때)
- leaveUser / out : 브라우저를 닫았을때(채팅방을 나갔을 때)
*/

//웹소켓
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let users = {};
io.on("connection", (socket: Socket) => {
  socket.on("room", function (room_id, user_name) {
    socket.join(room_id);
    console.log(room_id + "방입장");
    const member = {
      room_id,
      name: user_name,
    };
    users[socket.id] = member;

    io.emit("members", users, { room_id, name: user_name });
  });

  // console.log("a user connected");
  socket.on("send message", (messageobject) => {
    console.log(messageobject);
    const date = new Date();
    const time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };
    io.to(messageobject.room_id).emit("message", messageobject, time);
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      const outMember = users[socket.id];
      delete users[socket.id];
      io.emit("exit", users, outMember);
    } else {
      console.log("dd");
    }
  });
});
