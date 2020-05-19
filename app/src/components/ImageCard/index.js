import React from "react";
import "./style.css";

const ImageCard = props => (
  <div className="card" key={props.id} onClick={() => props.handleClick(props.id, props.clicked)}>
    <img id={props.name} alt={props.name} src={props.image} />
  </div>
)

export default ImageCard;