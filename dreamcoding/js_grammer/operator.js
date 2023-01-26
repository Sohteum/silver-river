// 1.String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:
'''
1 + 2 = ${1 + 2}`);
// ''로 스트링을 작성하면 중간에 줄바꿈불가, '''안에' 사용불가 그래서 ``백틱사용
console.log("somi's \n\tbook");
// \을 사용하여 '를 붙여주거나 줄바꿈 가능


// 2. Numetic operatiors
console.log(1 + 1); // add
console.log(1 - 1); // sybstract
console.log(1 / 1); // divide
console.log(1 * 1); // muliply
console.log(1 % 1); // ramainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; 카운터에 1을 더하고,
// preIncrement = counter; 그 후에 프리인크리먼트에 카운트 값을 할당하는 것 =3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// 먼저 포스트인크리먼트에 카운트 값을 할당하니 3, 그 후에 카운터에 1을 더해서 카운더는 4

const preDecrement = --counter;
console.log(`pretDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
console.log(x);
x -= y;
x *= y;
x /= y;


// 5. Comparing operators
console.log(10 < 6); // less than
console.log(10 <= 6); // lass than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthy value 밸류값이 몇개든 트루가 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`);
// 여기서 value의 위치가 중요한게, 뒤로갈수록 무거운 애들을 배치해야 효율적으로 시스템 사용 가능

// &&(and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// null오브젝트가 null이 아닐때만 something이라는 value를 받아오게 됨.
//if (nullableObject != null) {
//    nullableObject.something;
//}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😆');
    }
    return true;
}

// ! (not) 값을 반대로 바꿔준다.
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
// 엘리1,2는 모두 다른 레퍼런스를 가리키고있지만 3은 1과 동일한 레퍼런스.

// equality - puzzler
console.log(0 == false);
// 0과 Null, undefined과 emty string은 폴스로 간주될 수 있다. 트루.
console.log(0 === false);
// 하지만 0은 boolean타입이 아니므로 이건 폴스
console.log('' == false);
// 빈 문자열 즉, emty string은 false로 간주될수있음 true
console.log('' === false);
// emty string은 boolean타입이 아니므로 false
console.log(null == undefined);
// 같은 타입으로 간주될 수 있음
console.log(null === undefined);
// 하지만 얘들은 다른 타입.


// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
// ? 앞에 있는게 true면 ?뒤에있는거 실행. 아니면 오른쪽거 실행

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'Firefox':  // 동일한 값을 출력하는 경우 케이스를 이렇게 연달아 적어주면 됨.
        console.log('love you!');
        break;
        dafault:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed. 조건문이 맞아야 와일을 실행
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. 조건문 상관없이 일단 먼저 실행. 
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
} // for안에 지역변수인 let을 선언하기도 함

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// ir가 0일때, j를 0~9까지 돌리고, 2일때 또 돌리고 반복/ cpu에 안좋아서 별로 안씀

// break, continue(break는 여기서 끝내기, continue는 지금것만 스킵 뒤부터 계속)
// Q1. iterate from 0 to 10 and print only even numbers(use continue) even number짝수
for (i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    } console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    } console.log(i);

}