import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages }: { messages: any }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <div className="flex justify-between">
        <p>Hangout Here</p>
        <button onClick={handleLeaveChat}>Leave Chat</button>
      </div>
      <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div>

        <div className="message__container">
          {messages.map((message: any) =>
            message.name === localStorage.getItem("userName") ? (
              <div className="message__chats" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              <div className="message__chats" key={message.id}>
                <p>{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
              </div>
            )
          )}

          <div className="message__status">
            <p>Someone is typing...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
