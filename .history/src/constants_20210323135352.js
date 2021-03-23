const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1, "UP", "DOWN"], // up
  40: [0, 1, "DOWN", "UP"], // down
  37: [-1, 0, "LEFT", "RIGHT"], // left
  39: [1, 0, "RIGHT", "LEFT"] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
