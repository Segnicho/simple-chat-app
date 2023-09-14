import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface ChatPageProps {
  socket: any;
}
const Home: React.FC<ChatPageProps> = ({ socket }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", username);
    socket.emit("newuser", {
      username: username,
      socketId: socket.id,
    });

    navigate("/chat");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
