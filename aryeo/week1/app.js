// Variables & const and let
var a = 5; // var은 예전에 쓰인 선언 방식, 쓰지 않을 것.
const b = 2; // const는 절대 변하지 않는 변수 선언, 기본적으로 이를 사용
let myName = 'aryeo'; // let은 update 할 수 있는 변수 선언
const veryLongVariableName = 0; // 띄워쓰기 하고 싶은 부분 단어 첫글자를 대문자로

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

myName = 'Roh aryeo';

console.log('your new name is ' + myName);

// Booleans
const amIFat = null; // null: nothing & true, false 있음 -> type
let something; // undefined
console.log(amIFat);
console.log(something);

// Arrays
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push('sun');

console.log(daysOfWeek);

// Objects
const player = {
    name: 'aryeo',
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);

player.fat = false;

console.log(player);

player.lastName = 'potato';

console.log(player);

player.points = player.points + 15;

console.log(player.points);

// Functions
function sayHello(nameOfPerson, age) {
    console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(firstNumber, sencondNumber) {
    console.log(firstNumber + sencondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: 'nico',
    sayHello: function (otherPersonName) {
        console.log('Hello ' + otherPersonName + ' nice to meet you!');
    },
};

console.log(player.name);
player.sayHello('lynn');

// Returns
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 3);
const timesResult = calculator.plus(10, minusResult);
const divideResult = calculator.plus(timesResult, plusResult);
const powerResult = calculator.plus(divideResult, minusResult);

const age1 = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age1);

console.log(krAge);

// Conditions
const age = parseInt(prompt('How old are you?')); // parseInt(): string을 integer로 변환.
// prompt()는 잘 쓰지 않는 함수, 다른 입력이 들어오기 전까지 실행 멈춤.
// typeof: 어떤 자료형인지를 나타냄.

// isNaN(): number인지 아닌지 판별
if (isNaN(age) || age < 0) {
    console.log('Please write a real positive number');
} else if (age < 18) {
    console.log('You are too young.');
} else if (age >= 18 && age <= 50) {
    console.log('You can drink.');
} else if (age > 50 && age <= 80) {
    console.log('You should exercise.');
} else if (age > 80) {
    console.log('You can do whatever you want.');
}
