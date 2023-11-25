let eyeColor: string = 'Black';

let pets: string[] = ['cat', 'dog'];

//Tuple
let basket: [string, number] = ["basketball", 10];
// basket = ['basketball', 10];

//Enum
enum Size { small = 1, meduim = 2};
let sizeName: number = Size.small;

enum Direction{
    Up, Down, Left, Right
}

let playerDirection = Direction.Down;
console.log(playerDirection);

//never
function throwError(message: string): never{
    throw new Error(message);
};

//interface
interface RobotArmy{
    count: number,
    type: string,
    magic: string,
}

function fightRobotArmy(robots: RobotArmy){
    console.log('Fight')
}

//Union
let confused: string | number = 5
