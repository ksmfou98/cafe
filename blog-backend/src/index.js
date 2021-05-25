import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postsRouter from "./routers/postsRouter";
import authRouter from "./routers/authRouter";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✅ MongoDB Connected.... "))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
