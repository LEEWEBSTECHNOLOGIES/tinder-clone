import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./tindercards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // useEffect is a piece of code which runs based on a condition. It replaces all of the lifecycle methods in class component.

  useEffect(() => {
    // this is where the code runs...
    // this will run once when the component loads and never again
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // this is the cleanup...
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div className="tinderCards__cardContainer">
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
    </div>
  );
};

export default TinderCards;
