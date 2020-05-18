import React from "react";
import "./style.css";
import ImageCard from "../ImageCard";

const Wrapper = props => (
  <div className={
    props.shake
    ? "container shake"
    : "container justify-content-center"
  }
  >
    {props.images.map((image, index) => <ImageCard name = { image } key = {index} clickEvent = { props.clickEvent } />)}
  </div>
)

export default Wrapper;
