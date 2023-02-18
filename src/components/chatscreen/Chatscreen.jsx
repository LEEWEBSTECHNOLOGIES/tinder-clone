import { useState } from "react";
import "./chatscreen.css";

const Chatscreen = () => {
    const [messages, setMessages] = useState([
        {
            name: "Faatimah",
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C0DA/production/_84307394_d748dc3d-1c4f-4ba9-ab20-0a1f59223ddd.jpg",
            message: "what's up 🍎 " 
        },
        {
            name: "Faatimah",
            image: "https://muslimvoice.com.ng/wp-content/uploads/2022/01/Screenshot_20220119-120015.png",
            message: "how far🍎?" 
        },
        {
            message: "Hi, how are you Faatimah?"
        }
    ])
  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH FAATIMAH ON 15/12/2021</p>
    </div>
  );
};

export default Chatscreen;
