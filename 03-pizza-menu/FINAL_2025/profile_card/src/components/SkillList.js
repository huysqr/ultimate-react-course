import React from "react";

const SkillList = (props) => {
  // const skills = ["JavaScript", "React", "CSS", "HTML"];

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  return (
    <div className="skill">
      <ul className="skill-list">
        {props.skills.map((skill, index) => (
          <li
            key={index}
            style={{
              backgroundColor: colors[index % colors.length],
              borderRadius: "6px",
              padding: "5px",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
