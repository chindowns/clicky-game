import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images";

class App extends Component {
  state = {
    images: images,
    message: "Click to Begin",
    score: 0,
    highScore: 0,
    clicked: false
  };

  handleClick = (id, clicked) => {
    const shuffleImgs = this.state.images;
    if (clicked) {
      shuffleImgs.forEach((image, index) => {
        shuffleImgs[index].clicked = false;
      });
      return this.setState({
        image: shuffleImgs.sort(() => Math.random() - 0.5),
        message: "You Clicked that one already",
        score:0
      })
    } else {
      shuffleImgs.forEach((image, index) => {
        if(id === image.id) {
          shuffleImgs[index].clicked = true;
        }
      });
      const {highScore, score} = this.state;
      let newScore = score + 1;
      let newHighScore = score > highScore ? newScore : highScore;

      return this.setState({
        image: shuffleImgs.sort(() => Math.random() -0.5),
        message: "Good Guess!",
        score: newScore,
        highScore: newHighScore
      })
    }
  };

  render() {
    return(
      <div>
      <Title
        score={this.state.score}
        highScore={this.state.highScore}
        message={this.state.message}
      />
      {this.state.images.map(image => (
      <ImageCard
        key={image.id}
        id={image.id}
        name={image.name}J
        clicked={image.clicked}
        image={image.image}
        handleClick={this.handleClick}
      />
      ))};
      </div>
    );
  }
}

export default App;
