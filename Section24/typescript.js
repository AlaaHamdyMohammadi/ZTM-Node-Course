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
