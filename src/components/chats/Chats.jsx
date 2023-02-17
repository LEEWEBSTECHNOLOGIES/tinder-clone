import Chat from "../chat/Chat";
import "./chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Titilola"
        message="Hello sister "
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
      <Chat
        name="Modupeola"
        message="Hello sister"
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
      <Chat
        name="Olabisi"
        message="Hello sister"
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
      <Chat
        name="Rashida"
        message="Hello sister"
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
      <Chat
        name="Folashade"
        message="Hello sister"
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
    </div>
  );
};

export default Chats;
