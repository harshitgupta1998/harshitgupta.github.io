import React from "react";
import "./ProjectCard.css";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectCard({ img, name, AppUrl, CodeUrl }) {
  return (
    <div className="projectCard">
      <p>{name}</p>
      <img src={img} alt="" />
      <div className="projectCard__views">
        <a href={AppUrl} target="_blank">
          {<LanguageSharpIcon />} View Project
        </a>

        <a href={CodeUrl} target="_blank">
          {<GitHubIcon />} View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
