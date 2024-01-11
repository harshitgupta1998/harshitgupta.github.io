import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AdbIcon from "@material-ui/icons/Adb";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function About() {
  return (
    <div className="about">
      <div className="about__title" id="myDiv">
        <h1>About Me</h1>
        <p>Hi! My name is Hongdi and here is some facts about me :)</p>
      </div>

      <div className="about__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>

      <div className="about__body">
        <div className="about__bodyFact">
          <WorkIcon />
          <p>
            {" "}
            I am currently a hydro-informatics specialist working on data
            science projects in Python and web designs with React.js
          </p>
        </div>
        <div className="about__bodyFact">
          <PhoneIphoneIcon />
          <p>
            {" "}
            I built an AR Mobile App prototype which is expected to be used by
            more than 1 million people with C#/Unity
          </p>
        </div>
        <div className="about__bodyFact">
          <AdbIcon />
          <p>
            {" "}
            I was once a robotics engineer specialising in control optimization
            and machine learning with C++/MATLAB
          </p>
        </div>
      </div>
      <div className="about__body">
        <div className="about__bodyFact">
          <MonetizationOnIcon />
          <p>
            {" "}
            I worked as a catastrophe data analyst for Willis Reinsurance on
            damage estimation with Python and Oasis LMF Framework
          </p>
        </div>
        <div className="about__bodyFact">
          <AssignmentIcon />
          <p>
            {" "}
            I acquire my data analytic and web design skills through
            side-courses and live projects out of my own great interests
          </p>
        </div>
        <div className="about__bodyFact">
          <MusicNoteIcon />
          <p>
            {" "}
            I played in a blues band as a guitarist and keyboardist for three
            years, and I am learning Saxophone at the meantime
          </p>
        </div>
      </div>

      <div className="about__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>

      <div className="about__bodyImg">
        <img src={require("./image/Life.jpg")} alt="" />
        <img src={require("./image/Music.jpg")} alt="" />
      </div>

      <div className="about__bodyImg">
        <img src={require("./image/Data-Analysis.png")} alt="" />
        <div className="about__floodApp">
          <img src={require("./image/FloodApp.png")} alt="" />
          <img src={require("./image/FloodGo.PNG")} alt="" />
        </div>
      </div>

      <div className="about__seperate">
        <p className="about__lastSeperate">
          ———————————————————————— · ————————————————————————
        </p>
      </div>

      <div className="about__pageChange">
        <div className="about__pageChangeButton">
          <p>About</p>
        </div>
        <h5>|</h5>
        <Link to="/projects">
          <div className="about__pageChangeButton">
            <p>Projects</p>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>
      {/*
                 <div className = "backToTop">
                    <button >
                        Back To Top <ExpandLessIcon/>
                    </button>
                </div>
                 */}
    </div>
  );
}

export default About;
