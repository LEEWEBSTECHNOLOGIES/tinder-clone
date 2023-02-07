import "./header.css";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    // BEM
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
        alt="tinder logo"
      />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
