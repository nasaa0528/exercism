export function Size(width, height) {
  this.width = width ?? 80;
  this.height = height ?? 60;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width =  newWidth;
  this.height = newHeight;
};

export function Position(x, y) {
  this.x = x ?? 0;
  this.y = y ?? 0;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const newWidth = setBoundary(newSize.width, 1, this.screenSize.width - this.position.x);
    const newHeight = setBoundary(newSize.height, 1, this.screenSize.height - this.position.y);

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const newX = setBoundary(newPosition.x, 0, this.screenSize.width - this.size.width);
    const newY = setBoundary(newPosition.y, 0, this.screenSize.height - this.size.height);

    this.position.move(newX, newY);
  }
}

const setBoundary = (val, min, max) => val < min ? min : val > max ? max : val;

export const changeWindow = w => {
  const newSize = new Size(400,300);
  const newPosition = new Position(100,150);

  w.resize(newSize);
  w.move(newPosition);

  return w;

}
