import React from "react";
import "./ContentHeader.css";
import { Link } from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AppsIcon from "@material-ui/icons/Apps";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ContentHeader() {
  return (
    <div className="contentHeader">
      <div className="contentHeader__menu">
        <div className="contentHeader__menuText">
          <h4>Portolio Menu</h4>
          <ChevronRightIcon />
        </div>
        <p className="contentHeader__menuBreak">|</p>
        <EmojiPeopleIcon />
        <Link to="/">
          <p className="contentHeader__menuDetail">About</p>
        </Link>
        <AppsIcon />
        <Link to="/projects">
          <p className="contentHeader__menuDetail">Projects</p>
        </Link>
        <ChromeReaderModeIcon />
        <Link to="/Resume">
          <p className="contentHeader__menuDetail">Resume</p>
        </Link>
        <PermContactCalendarIcon />
        <Link to="/contact">
          <p className="contentHeader__menuDetail">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default ContentHeader;
