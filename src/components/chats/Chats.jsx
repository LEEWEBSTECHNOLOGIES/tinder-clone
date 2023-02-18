import Chat from "../chat/Chat";
import "./chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Bilaal"
        message="Hello how are you 😇 "
        timestamp="40 seconds ago"
        profilePic="https://bilalphilips.com/wp-content/uploads/2016/10/Dr-bilal-Profile-pic.jpg"
      />
      <Chat
        name="Maryam"
        message="What's up? 🤟"
        timestamp="40 seconds ago"
        profilePic="https://ichef.bbci.co.uk/news/976/cpsprodpb/C0DA/production/_84307394_d748dc3d-1c4f-4ba9-ab20-0a1f59223ddd.jpg"
      />
      <Chat
        name="Aaishah"
        message="Hello sister 🚀"
        timestamp="40 seconds ago"
        profilePic="https://muslimvoice.com.ng/wp-content/uploads/2022/01/Screenshot_20220119-120015.png"
      />
      <Chat
        name="Rashida"
        message="Assalaamu 'alaykum.💕"
        timestamp="40 seconds ago"
        profilePic="https://ichef.bbci.co.uk/news/640/cpsprodpb/F81D/production/_125971536_mediaitem125971535.jpg"
      />
      <Chat
        name="Summayyah"
        message="Ola 😇"
        timestamp="40 seconds ago"
        profilePic="https://www.habeebat.com/wp-content/uploads/2019/06/Top-5-Fashion-Dos-and-Donts-for-the-Nigerian-Muslim-Man-b.png"
      />
      <Chat
        name="Abdullahi"
        message="Nagode"
        timestamp="40 seconds ago"
        profilePic="https://www.barnabasfund.org/us/news/fulani-muslim-man-rescues-nigerian-christian-missionaries-dumped-in-bush/images/abubakar-abdullahi-4x3-654x490.jpeg"
      />
    </div>
  );
};

export default Chats;
