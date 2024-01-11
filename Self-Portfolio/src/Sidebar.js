import React from "react";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import BusinessIcon from "@material-ui/icons/Business";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Personal Photo */}
      <div className="sidebar__icon">
        <img src={require("./image/profile.jpg")} alt="" />
        <p className="sidebar__seperate">_____________________</p>
      </div>
      {/* Name and work */}
      <div className="sidebar__person">
        <h2>Hongdi LAI</h2>
        <p> Software/Web Developer </p>
      </div>
      <div className="sidebar__info">
        <div className="sidebar__phone">
          <WhatsAppIcon />
          <p>{"+65 88098616"}</p>
        </div>

        <div className="sidebar__location">
          <LocationOnIcon />
          <p>Singapore</p>
        </div>
        <a
          className="sidebar__employ"
          href={"https://www.dhigroup.com/dhi-worldwide/sg"}
          target="_blank"
        >
          <BusinessIcon />
          <p>DHI Singapore</p>
        </a>
      </div>

      <p className="sidebar__seperate">_____________________</p>

      {/* Social Media and stuff */}
      <div className="sidebar__contact">
        <IconButton href={"https://github.com/Hongdi-LAI"} target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton
          href={"https://www.linkedin.com/in/hongdilai/"}
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <Link to="/contact">
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
