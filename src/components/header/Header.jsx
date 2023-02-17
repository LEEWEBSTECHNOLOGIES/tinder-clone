import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    // BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate.replace(backButton)}>
          <ArrowBackIos fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
