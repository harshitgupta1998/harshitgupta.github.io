import React from "react";
import "./Resume.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resume">
      <div className="resume__title">
        <h1>My Resume</h1>
        <p>This page serves as a professional introduction of Hongdi LAI</p>
      </div>

      <div className="resume__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>
      {/*
              <iframe
            title = "Resume_Hongdi"
            src = {require("./image/CV_Hongdi_LAI.pdf")} 
            width = "100%"
            height = "100%"
            >
            </iframe>
    */}

      <img src={require("./image/CV_Hongdi_LAI.jpeg")} alt="" />

      <div className="resume__seperate">
        <p className="resume__lastSeperate">
          ———————————————————————— · ————————————————————————
        </p>
      </div>

      <div className="resume__pageChange">
        <Link to="/projects">
          <div className="resume__pageChangeButton">
            <ChevronLeftIcon />
            <p>Projects</p>
          </div>
        </Link>
        <h5>|</h5>
        <Link to="/contact">
          <div className="resume__pageChangeButton">
            <p>Contact</p>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
