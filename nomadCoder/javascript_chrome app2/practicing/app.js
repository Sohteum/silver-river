const a = 5;
const b = 2;
let myName = "somi";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "sohteum";

console.log("hello " + myName);


const amIFat = false;
console.log(amIFat);

const amIFat2 = null;
console.log(amIFat2);



let something;
console.log(something);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[3]);

daysOfWeek.push("sun");

console.log(daysOfWeek);

// 오브젝트만들기 : 특성이 있는 변수, property를 가진 데이터를 저장하게해줌
const player = {
  name: "somi",
  // {}안에서는 =을 사용하지않음, 
  // 한개의 property를 작성하고 난뒤 , 콤마
  point: 10,
  fat: true,
}
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
player.lastName = "tomato";
player.point = player.point + 10;
console.log(player);
// const는 변할 수 없지만 그 object안에 있는 변수는 가능


// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// function sayHello() {
//   console.log("Hello my name is A");
// }

// sayHello("somi");
// sayHello("nico");
// sayHello("lynn");
// A가 somi로 나왔으면 좋겠는데 아무것도 안나옴

function sayHello(nameOfPerson, age) { //여러 이름을 넣고싶으니까 이렇게 작성해보자, argument는 두개 받을 수 있음
  console.log(nameOfPerson);
  console.log("Hello my name is " + nameOfPerson + " and I'm ")
}

sayHello("somi", 10);
sayHello("nico", 30);
sayHello("lynn", 19);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(8, 30);

const player2 = {
  name: "somi",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to see you")
  },
};
player2.sayHello("sohteum");

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multifly: function (a, b) {
    console.log(a * b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.divide(5, 1);
calculator.multifly(5, 5);
calculator.powerOf(5, 3);
