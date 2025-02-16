import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

function TeamCard({ imgUrl, alt, name, designation, linkedin_url, instagram_url, github_url }) {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <img src={`../src/assets/team/${imgUrl}`} alt={alt} />
      </div>
      <div className="team-card-heading">
        <h1>{name}</h1>
        <p>{designation}</p>
      </div>
      <div className="team-card-social-links">
        {linkedin_url && (
          <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        )}
        {instagram_url && (
          <a href={instagram_url} target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        )}
        {github_url && (
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
