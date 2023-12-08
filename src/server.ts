import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", (req, res) => {
  return res.send("Hello!");
});

export default server;
