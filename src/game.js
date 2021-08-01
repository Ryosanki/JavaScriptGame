import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    this.gameObjects = [this.ball, this.paddle];
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }
}
