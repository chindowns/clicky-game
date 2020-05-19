import React from "react";
import "./style.css";
import ImageCard from "../ImageCard";

const Wrapper = props => (
  <div className="container">
    <div className="row row-cols-3">
      <div class="col">
        {props.children}
        {props.images.map((image, index) => <ImageCard name={image} key={index} clickEvent={props.clickEvent} />)}
      </div>
    </div>
  </div>
)

export default Wrapper;
