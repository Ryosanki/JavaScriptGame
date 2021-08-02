import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "/src/brick";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    let bricks = [];

    for (let i = 0; i < 10; i++) {
      bricks.push(new Brick(this, { x: i * 52, y: 30 }));
    }

    this.gameObjects = [this.ball, this.paddle, ...bricks];
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }
}
