import React from "react";

function Skills(props) {
  const skill = props.skill;

  return (
    <div className="skills-section">
      <div className="skill-box">
        <img src={skill.img} alt={skill.alt} />
        <p>{skill.name}</p>
      </div>
    </div>
  );
}

export default Skills;
