import React, { useState } from "react";

const ChatFooter = ({ socket }: { socket: any }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
        socket.emit("message",{
            text: message.trim(),
            name: localStorage.getItem("userName"),
            id: `${socket.id}${Math.random()}`,
            socketId: socket.id
        })
        setMessage("")
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write your message here"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
