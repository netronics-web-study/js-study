const a = 5;
const b = 2;
let myname = "형선";
//let은 변수 const는 상수
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myname);
myname = "유형선";
console.log("your new name is" + myname);

const amIFat = null;
let something;
console.log(something, amIFat);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tamato", "pizza"];
console.log(toBuy[2]);

//objects
const player = {
    name: "yhs",
    points: 10,
    fat: true,
};
console.log(player);
player.fat = false;
player.gender = "male";
player.points = player.points + 15;
console.log(player);

//function
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "and I'm" + age);
}
sayHello("nico", 10);
sayHello("dal", 3);
sayHello("lynn", 15);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function devide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}
plus(45, 798);
devide(756 / 4);
