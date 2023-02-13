import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS6j6jazxVpBpf4ZdKMgUeN61C_s4EJPqI7NijX0PDep3SGXQ_bT9ap12h2MWoIolUIpngs3pApkIH-Kzw",
    },
    {
      name: "Mark Zuckerberg",
      url: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRYT8u3wI9a6gaceV_KUz_4LyVnTep01eLQa3xBOSBl-uBjA54InsDoUIZBiim-VGpQv2ad2OTZQ5hDa6U",
    },
  ]);
  return (
    <div>
      <h1>Tinder cards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
