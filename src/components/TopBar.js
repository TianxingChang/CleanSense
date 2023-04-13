import "../styles/TopBar.css";
import { Link } from "react-router-dom";
import SettingIcon from "../assets/images/account-settings.svg";
import ScannerIcon from "../assets/images/scan.svg";

export default function TopBar() {
  return (
    <div className="searchbar">
      <div className="input-text">
        <input
          className="input-window"
          type="text"
          placeholder="Type your location"
        />
      </div>
      <button className="qr-button">
        <Link to="/Scanner" className="scanner-link">
          <img
            src={ScannerIcon}
            className="scanner-icon"
            alt="account setting"
          />
        </Link>
      </button>
      <Link to="/Setting" className="account">
        <button className="account-button">
          <img
            src={SettingIcon}
            className="account-setting"
            alt="account setting"
          />
        </button>
      </Link>
    </div>
  );
}
