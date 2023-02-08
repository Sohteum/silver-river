const a = 5;
const b = 2;
// a, b = variable
// variable을 만들려면 const, let사용
// const(상수)는 값이 변하지 않음, let은 변경가능
// 보통은 const가 디폴트, update가 필요한 부분만 let사용
// 이전에는 var(variable을 썻었음, 하지만 var를 쓰면 앞으로 업데이트할건지 의미를 알수없음)

let myName = 'somi';
// camelCase사용. 띄어쓰기 대신 대문자를 쓰는 것을 말함. 파이썬은 snake_case사용
console.log(a + b);
console.log("hello " + myName);

myName = 'sosomi';
//새로운게 아니고 있떤걸 바꿀땐 let등을 사용하지 않고 그냥 쓰면 됨.

console.log("my name is " + myName);

const amIFat = true; //
console.log(amIFat);
// boolean타입은 string과는 다름 '', ""사용할 필요 없음. null도 마찬가지.
// null 아무것도 없는 상태, null은 절대 자연적으로 발생하지 않음. 아무것도 없다는것을 확실히 하기 위해 사용하는것

let something;
// variable을 만드는데 value. 즉, 값을 주지않음
console.log(something);
// 그럼 데이터 값이 undefined으로 나옴 존재는 하는데 정의되지않은거지.

const mon = "mom";
const tue = "tue";
const wed = "wed";

const daysOfWeek = mon + tue + wed;
// bad way
const daysOfWeek2 = ['mon', 'tue', 'wed'];
// good way : array []사용하기, 각각의 항목을 ,로 구분하기 넘버, 스트링, 불리언 모두 쓸수잇음

console.log(daysOfWeek);
console.log(daysOfWeek2);
console.log(daysOfWeek2[2]);
// variable이름 입력하고 []안에 몇번째를 출력할건지 넣으면 됨.

// add one more day to thr array
daysOfWeek2.push('sun');

console.log(daysOfWeek2);

// Object : property. 즉 속성을 가진 데이터를 저장하게 해줌
const player = ["nico, 1212, false"];
// 플레이어의 이름, 포인트, 잘생김 등을 표현하고싶을땐 배열로는 부족함
const player2 = {
    name: "nico",
    points: 1212,
    fat: true
};
// 중괄호를 열고 속성(property)을 부여한다.

console.log(player2);
console.log(player2.name); // = console.log(player2[name]); 

player2.lastName = "potato";
player2.fat = false;
player2.points = player2.points + 15;
console.log(player2);
// 속성값을 추가하거나 변경가능, 
// player2 = "potato" 변수를 그대로 바꾸면 당연 안됨. 하지만 그 안의  property는 가능


// Function : 반복해서 쓸 수 있는 코드조각, 코드를 캡슐화해서 반복하게해줌.
//function sayHello() {
//    console.log("Hello! my name is C");
//}
// function을 쓰고 이름을 짓고, 중괄호 안에 내용을 넣으면 그 내용을 언제든 써먹을 수 있다.
sayHello();
sayHello();
sayHello();
sayHello();
// 인수(argument)는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.
sayHello("nico");
sayHello("dal");
//괄호 안에 이름을 넣었지만 내용이 출력되지 않음.

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
}
// 괄호안에 variable을 정의해줌. 그럼 데이터를 받을 수 있어. 괄호안에있는건 인수. 두개를 넣어보자
sayHello("nico", 10);
sayHello("dal", 15);

function plus(a, b) {
    console.log(a + b);
}
plus(20, 33);

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}
divide(59, 3);

// 
const guest = {
    name: "somi",
    sayHello: function (otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you");
    }
}

guest.sayHello("lynn");
guest.sayHello("ellie");



const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    times: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return a ** b;
    }
}
//console.log(a,b)는 콘솔에서 무언가를 보기 위함임.
//하지만 실무에서는 데이터처리를 위하는 것이지 콘솔로그에서 꼭 무언가를 보지않음
//따라서 console.log(a, b); 가 아닌 return으로 바꿔줌
calculator.plus(3, 7);
calculator.minus(9, 2);
calculator.divide(89, 2);
calculator.times(89, 2);
calculator.power(33, 2);

//그러면 콘솔로그에서는 결과를 볼수 없기에 다음과 같은 방법을 사용
const plusResult = calculator.plus(3, 7);
// 콘솔로그에 plusResult를 입력하면 10이 나오는 걸 볼 수 있음
