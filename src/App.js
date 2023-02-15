import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import TinderCards from "./tindercards/TinderCards";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TinderCards />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* Header */

/* Tinder Cards */

/* Buttons below Tinder cards */

/* Chats screen */

/* Individual chat screen */
