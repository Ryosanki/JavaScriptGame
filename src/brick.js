export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {}
}
