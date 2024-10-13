enum Direction1 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let c1: Direction1 = Direction1.NORTH;
let c2: Direction1 = Direction1.EAST;

console.log(c1, c2);

enum Direction2 {
  NORTh = "north",
  SOUTH = "south",
  EAST = 30,
  WEST,
}

console.log(Direction2.EAST, Direction2.WEST);
