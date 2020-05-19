import React from "react";
import "./style.css";

const ImageCard = props => (
  <div className="card col-3" key={props.id} onClick={() => props.handleClick(props.id, props.clicked)}>
    <img id={props.name} src={props.image} />
  </div>
)

export default ImageCard;