// function
// - fundamental buildong block in the program
// - subprogram can be uesd multiple times
// - performs a task or calculares a value

// 1. Function declaration
// function name(param1, param2) { body...return; }
// one function === one thing 하나의 함수는 한가지 일만 시키자.
// naming: doSomething, command, verb 무언가를 동작시키는것이기때문에 동사형태로 정함
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();
// 이 함수는 헬로밖에 못하니까 쓸데가 없음

function log(message) {
    console.log(message);
}
log('hello');
log(1234);

//typeScriptlang.org/ > playgroung접속하면, 왼쪽에 타입스크립트로 적으면 오른쪽에 자바스크립트로 번역을 해줌.


// 2. Parameters 매개변수.(한도)
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi');
// 사용자가 from값을 지정하지 않으면 undefined가 출력됨. 따라서 위처럼 from 옆에 작성

// 4. Rest parameters (added in ES6) ...닷닷닷 세개를 입력하면 rest parameter로 불림.이건 배열의 형태로 전달됨.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    } // 위와 동일한데, for of를 사용

    args.forEach((arg) => console.log(arg));
    // 동일한데  forEach사용
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope 스코프 개념은 이것만 기억하자! 안에서는 밖이 보이고, 밖에서는 안이 보이지 않는다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); <-밖에서는 안이 보이지 않기때문에. 에러뜸
}
printMessage();

// 6. Return a value 이렇게 리턴을 주는건데, 보통은 생략되어있는것.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad // 아닌경우에도 계속 밑에까지 맞는지 확인할 필요가 없다.
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good // 아닌경우, 빨리 리턴을 해버리면 더 좋은거지
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// function are treated like any other variable 다른 변수와 마찬가지야
// can be assigned as a value to variable 변수에 할당할 수 있고
// can be passed as an argument to other functions. 펑션의 파라미터로 전달이 되고,
// can be returned by another function 리턴값으로도 리턴이 된다는 말씀!

// 1. Function expression
// a funtion declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // 함수를 선언함과 동시에 print에 할당하는 것을 볼 수 있는데,이렇게 이름이 없는 것을 anonymous function이라고 함
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// }; 아래와 같이 간결하게 작성가능

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 이렇게 해서 바로 출력가능!


// Fun quiz time!
// function calculate(command, a, b)
// command: add, substract, divide, multiply, ramainder

// function calculate () {
//    calculate.add = a + b;
//    calculate.substract = a - b;
//    calculate.divide = a / b;
//    calculate.multiply = a * b;
//    calculate.remainder = a % b;
//}

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));