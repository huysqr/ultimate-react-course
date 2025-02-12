import "./App.css";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import React from "react";

const data = {
  name: "Huy Nguyen Dang",
  description:
    "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
  skills: ["React", "Node", "Express", "MongoDB"],
  image: "images/girl-AI.png",
};

function App() {
  return (
    <div className="card">
      <Avatar image={data.image} />
      <div className="data">
        <Intro name={data.name} intro={data.description} />
        <Skill skills={data.skills} />
      </div>
    </div>
  );
}

export default App;
