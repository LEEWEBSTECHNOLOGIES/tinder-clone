import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import TinderCards from "./components/tindercards/TinderCards";
import SwipeButtons from "./components/swipebuttons/SwipeButtons";
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
      <SwipeButtons />
    </div>
  );
}

export default App;

/* Header */

/* Tinder Cards */

/* Buttons below Tinder cards */

/* Chats screen */

/* Individual chat screen */
