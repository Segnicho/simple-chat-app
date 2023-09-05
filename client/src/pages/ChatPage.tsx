import React, { useEffect, useState } from "react";
import ChatSideBar from "../components/ChatSideBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
interface ChatPageProps {
  socket: any;
}
const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  const [messages, setMessages] = useState<any>([]);
  useEffect(() => {
    socket.on("responseMessage", (data: any) =>
      setMessages([...messages, data])
    );
  }, [messages, socket]);

  return (
    <div>
      <div>
        <ChatSideBar socket={socket} />
      </div>
      <div>
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
