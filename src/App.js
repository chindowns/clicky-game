import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import images from "./images";

class App extends Component {
  state = {
    images: images,
    message: "Click to Begin",
    score: 0,
    highScore: 0,
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
        score: 0
      })
    } else {
      shuffleImgs.forEach((image, index) => {
        if (id === image.id) {
          shuffleImgs[index].clicked = true;
        }
      });

      const { highScore, score } = this.state;
      let newScore = score + 1;
      let newHighScore = score > highScore ? newScore : highScore;

      return this.setState({
        image: shuffleImgs.sort(() => Math.random() - 0.5),
        message: "Good Guess!",
        score: newScore,
        highScore: newHighScore
      })
    }
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1 className="title">Match Game</h1>
            <strong>Click on an image to earn points, but don't click on any, more than once!</strong>

            <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.highScore}</strong></p>

            <p className="message"><strong>{this.state.message}</strong></p>
          </div>
        </div>

        <div className="container text-center">
          <div className="row row-cols-4npm">
              {this.state.images.map(image => (
                <ImageCard
                  key={image.id}
                  id={image.id}
                  name={image.name} 
                  clicked={image.clicked}
                  image={image.image}
                  handleClick={this.handleClick}
                />
              ))};
          </div>
        </div>

      </div>
    );
  }
}

export default App;
