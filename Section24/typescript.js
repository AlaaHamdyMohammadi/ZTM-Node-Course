var eyeColor = 'Black';
var pets = ['cat', 'dog'];
//Tuple
var basket = ["basketball", 10];
// basket = ['basketball', 10];
//Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["meduim"] = 2] = "meduim";
})(Size || (Size = {}));
;
var sizeName = Size.small;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var playerDirection = Direction.Down;
console.log(playerDirection);
