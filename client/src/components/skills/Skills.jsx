import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";

import redux from "../../assets/skills/redux.png";
import mongodb from "../../assets/skills/mongodb.png";
import javascript from "../../assets/skills/javascript.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import firebase from "../../assets/skills/firebase.png";
import git from "../../assets/skills/git.png";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skill_container">
        <div className="upper">
          <img src={react} alt="react-icon" />
          <img src={btc} alt="btc-icon" />
          <img src={eth} alt="eth-icon" />
          <img src={truffle} alt="truffle-icon" />
          <img src={gns} alt="gns-icon" />
          <img src={polygon} alt="polygon-icon" />
          <img src={node} alt="node-icon" />
        </div>

        <div className="lower">
          <img src={html} alt="node-icon" />
          <img src={css} alt="node-icon" />
          <img src={git} alt="node-icon" />
          <img src={redux} alt="node-icon" />
          <img src={javascript} alt="node-icon" />
          <img src={mongodb} alt="node-icon" />
          <img src={firebase} alt="node-icon" />
        </div>
      </div>
    </section>
  );
};

export default Skills
