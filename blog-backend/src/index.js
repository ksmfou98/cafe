import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
