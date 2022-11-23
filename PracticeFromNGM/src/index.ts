import express from "express";

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Salam!");
});

app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});
