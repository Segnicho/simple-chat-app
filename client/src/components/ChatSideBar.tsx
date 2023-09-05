import React, { useEffect, useState } from "react";

const ChatSideBar = ({ socket }: { socket: any }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: any) => setUsers(data));
  }, [socket, users]);

  return (
    <div>
      <h2>Open Chat</h2>
      <div>
        <h4 className="">ACTIVE USERS</h4>
        <div className="">
          {users.map((user: any) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
