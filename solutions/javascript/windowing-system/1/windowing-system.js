export function Size(w = 80, h = 60) {
  this.width = w;
  this.height = h;
}

Size.prototype.resize = function (w, h) {
  if (w < 1) w = 1;
  if (h < 1) h = 1;
  this.width = w;
  this.height = h;
};

export function Position(x = 0, y = 0) {
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  this.x = x;
  this.y = y;
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
    if (size.width > (this.screenSize.width - this.position.x))
      size.width = this.screenSize.width - this.position.x;
    if (size.height > (this.screenSize.height - this.position.y)) 
      size.height = this.screenSize.height - this.position.y;
    this.size.resize(size.width, size.height);
  }

  move(position) {
    if ((this.screenSize.width - this.size.width) < position.x) {
      position.x = this.screenSize.width - this.size.width;
    }
    if ((this.screenSize.height - this.size.height) < position.y) {
      position.y = this.screenSize.height - this.size.height;
    }
    this.position.move(position.x, position.y);
  }
}

export function changeWindow(pw) {
  pw.resize(new Size(400,300));
  pw.move(new Position(100, 150));
  return pw;
}

