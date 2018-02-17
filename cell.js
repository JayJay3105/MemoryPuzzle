class Cell {

  constructor(x, y, partner, color, shape) {
    this.x = x;
    this.y = y;
    this.partner = partner;
    this.color = color;
    this.shape = shape;
    this.found = false;
    this.show = false;
  }

  draw() {
    if (!this.show) {
      fill(200, 200, 255);
      rect((this.x * scl) + 4, (this.y * scl) + 4, size, size);
    } else if (this.show) {
      fill(this.color);
      if (this.shape == 0)
        rect((this.x * scl) + 4, (this.y * scl) + 4, size, size);
      else if (this.shape == 1)
        ellipse((this.x * scl) + 4 + size / 2, (this.y * scl) + 4 + size / 2, size, size);
      else console.log("NO SHAPE!");
    }
  }

  update() {
    // if (this.clicked()) {
    //   this.show = true;
    // }
  }

  clicked() {
    return mouseX > (this.x * scl) &&
      mouseX < (this.x * scl) + size &&
      mouseY > (this.y * scl) &&
      mouseY < (this.y * scl) + size &&
      mouseIsPressed;
  }

}