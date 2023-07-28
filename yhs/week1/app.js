/*
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
de


const calculator = {
    plus: function (a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    times: function (a, b) {
        alert(a * b);
    },
    devide: function (a, b) {
        alert(a / b);
    },
    power: function (a, b) {
        alert(a ** b);
    },
};
//return만 하면 console 창에 결과가 안보이지만 alert를 쓰면 보임
calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.devide(2, 3);
calculator.power(2, 3);

const age = 91;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);


//conditionals
const age = prompt("How old are you?");
console.log(age, parseInt(age));
console.log(isNaN(age));
*/
const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age < 0) {
    console.log("please write a positive number");
} else if (age < 18) {
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should excercise");
} else if (age === 1000) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("you can do whatever you want");
}
