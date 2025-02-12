import React from "react";

function Avatar(props) {
  const avatarStyle = {
    width: "200px",
    height: "200px",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const alt = "Default Avatar";

  return (
    <img className="avatar" src={props.image} alt={alt} style={avatarStyle} />
  );
}

export default Avatar;
