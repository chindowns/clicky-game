import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card .row-col-3" key={props.id} onClick={()=> props.handClick(props.id,props.clicked)}>
        <img id={props.name} alt={props.name} src={props.image} />
    </div>
  );
}

export default ImageCard;
