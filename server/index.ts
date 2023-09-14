import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import express from "express";
import { Server as SocketIOServer } from "socket.io";

dotenv.config();
const app = express();
const PORT = 5000;
app.use(cors());
const server = http.createServer(app);

const socketIO = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let users:any[] = []

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (message) => {
  console.log("🚀 ~ file: index.ts:26 ~ socket.on ~ message:", message);
  socketIO.emit("responseMessage", message);
})

socket.on("newuser",(newUser)=>{
    
    users.push(newUser);
    socketIO.emit("newUsersResponse",users)
} )

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/api/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

server.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});
