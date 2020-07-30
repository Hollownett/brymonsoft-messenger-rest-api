import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
import socketio from "socket.io";
// socket config
import WebSockets from "./utils/WebSockets.js";
// mongo connection
import "./config/mongo.js";
//routes
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
//middlewares
import { decode } from "./middlewares/jwt.js";

const app = express();

//Get PORT from enivaroment
const PORT = process.env.PORT || "3000";
app.set("PORT", PORT);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRouter);
app.use("/delete", deleteRouter);

//cath 404 error
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Create HTTP server
const server = http.createServer(app);
//Create socket connection
global.io = socketio.listen(server);
global.io.on("connection", WebSockets.connection);

//Event listener
app.listen(PORT);
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`);
});
