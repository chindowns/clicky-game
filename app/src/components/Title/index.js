import React from "react";
import "./style.css";

const Title = (props) => (
  <div className="jumbotron">
    <div className="container text-center">
      <h1 className="title">{props.children}</h1>
      <p className="message">Click on any image to start.  You can only click an image once!</p>
    </div>
  </div>
)

export default Title;
