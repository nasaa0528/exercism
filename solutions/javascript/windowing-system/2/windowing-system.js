export function Size(width=80, height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = Math.max(1, width);
  this.height = Math.max(1, height);
};

export function Position(x = 0, y = 0) {
  this.x = Math.max(0, x);
  this.y = Math.max(0, y);
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.resize(Math.min(size.width, maxWidth), Math.min(size.height, maxHeight));
  }

  move(position) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.move(Math.min(position.x, maxX), Math.min(position.y, maxY));
  }
}

export function changeWindow(window) {
  const newSize = new Size(400,300);
  const newPosition = new Position(100,150);

  window.resize(newSize);
  window.move(newPosition);

  return window;
}

