import React from "react";
import SkillList from "./SkillList";

const Skill = (props) => {
  return (
    <div>
      <SkillList skills={props.skills} />
    </div>
  );
};

export default Skill;
