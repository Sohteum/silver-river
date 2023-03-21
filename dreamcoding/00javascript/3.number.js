/* 원시타입(primitive) : 단일데이터
-넘버
-스트링
-불리언
-널, 언디파인, 심볼

객체(object):복합데이터
-오브젝트 (어레이)
-펑션(함수) */

// 넘버

let integer = 123; //정수
let negative = -123; //음수
let double = 1.23; //실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b; //16진수

console.log(0 / 123); //0
console.log(123 / 0); //infinity 숫자를 영으로 나누면 ... https://youtu.be/NKmGVE85GUU?t=32
console.log(123 / -0); //infinity
console.log(123 / 'text'); //NaN


let bigInt = 1234556378837363636363737373636363737363535363637373363637n;
console.log(bigInt);
