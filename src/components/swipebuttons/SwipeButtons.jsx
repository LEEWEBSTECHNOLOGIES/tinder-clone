import "./swipebuttons.css";
import {
  Close,
  Favorite,
  FlashOn,
  Replay,
  StarRate,
} from "@mui/icons-material";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <Replay fontSize="large" />
      <Close fontSize="large" />
      <StarRate fontSize="large" />
      <Favorite fontSize="large" />
      <FlashOn fontSize="large" />
    </div>
  );
};

export default SwipeButtons;
