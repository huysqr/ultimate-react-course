import React from "react";

const Intro = (props) => {
  return (
    <div className="intro">
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
};

export default Intro;
