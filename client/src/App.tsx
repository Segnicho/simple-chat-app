import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { socket } from "./utils/socket";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/chat" element={<ChatPage socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
