import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TinderCards from "./components/tindercards/TinderCards";
import SwipeButtons from "./components/swipebuttons/SwipeButtons";
import Chats from "./components/chats/Chats";
import Chatscreen from "./components/chatscreen/Chatscreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <Chatscreen />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* Header */

/* Tinder Cards */

/* Buttons below Tinder cards */

/* Chats screen */

/* Individual chat screen */
