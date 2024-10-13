var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 0] = "NORTH";
    Direction1[Direction1["SOUTH"] = 1] = "SOUTH";
    Direction1[Direction1["EAST"] = 2] = "EAST";
    Direction1[Direction1["WEST"] = 3] = "WEST";
})(Direction1 || (Direction1 = {}));
var c1 = Direction1.NORTH;
var c2 = Direction1.EAST;
console.log(c1, c2);
var Direction2;
(function (Direction2) {
    Direction2["NORTh"] = "north";
    Direction2["SOUTH"] = "south";
    Direction2[Direction2["EAST"] = 30] = "EAST";
    Direction2[Direction2["WEST"] = 31] = "WEST";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.EAST, Direction2.WEST);
