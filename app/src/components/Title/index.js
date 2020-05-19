import React from "react";
import "./style.css";

const Title = (props) => (
  <div className="jumbotron">
    <div className="container text-center">
      <h1 className="title">Match Game</h1>
      <strong>Click on an image to earn points, but don't click on any, more than once!</strong>

      <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.highScore}</strong></p>

      <p className="message"><strong>{this.state.message}</strong></p>
    </div>
  </div>
)

export default Title;
