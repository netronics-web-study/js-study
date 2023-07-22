function sayHello(a, age) {
  console.log("Hello! My name is " + a + " and I am " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 20);

function plus(a, b) {
  console.log(a + b);
}

plus(8, 60);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName);
  },
};

player.sayHello("lynn");
