// 1. Use strict
// added in ES 5
// use this for Vanlia Javascript.
'use strict';

// 2. Variable rw(read/write) 메모리에 읽고 쓰기 가능
// let (added in ES6)
let globalName = 'global name';
// global scope : 위처럼 블럭 밖에서 작성한걸 말함. 어느곳에서나 출력 가능
// 어플리케이션이 시작할 때 부터 끝날 때 까지 메모리에 항상 탑제되어있음. 최소한으로 사용하는것이 좋다. 

{
    let name = 'somi';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
// block scope : 이렇게 블럭을 이용하여 안에 작성하면 밖에서는 출력이 불가능함.
console.log(name);
// 이렇게 블럭안의 요소를 출력하면 콘솔로그에 빈칸으로 아무것도 나오지 않음.
console.log(globalName);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top)/호이스팅 : 어디에 선언했냐와 상관없이 항상 선언을 가장 위로 끌어올려주는것.(var는 출력 밑에 선언이 있어도 출력이 됨)
// has no block scope(블럭에 넣어도 블럭밖에서 출력가능)
console.log(age);
// 선언 위에 출력이 있으므로, 콘솔로그에 아무것도 안나와야하는데 undefined로 출력이 됨.
{
    age = 4;
    var age;
}
console.log(age);
// 블럭 안에 선언이 있어도 정상출력됨.

// 3. constant r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInweek = 7;
const maxNumber = 5;

// Note!!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - secutity
// - thread safety
// - reduce human mistakes


//4. Variable types
// primitive(더이상 나눠질수없는), single item: number, string, boolean, undefined, symbol(값 자체가 메모리에 저장됨)
// object(싱글아이템을 묶어놓은), box container(오브젝트를 가리키는 레퍼런스가 메모리에 저장되고 그 레퍼가 선언된 메모리를 가리킴)
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// 정수와 음의 정수를 0으로 나누면 무한대의 숫자값이 나옴, 스트링을 숫자로 나누면 nAn

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'bredan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
// 백틱을 사용하면 스트링과 변수를 붙일 수 있음
console.log(`value: ${helloBob}, type ${typeof helloBob}`);
// = ('value: ' + helloBOb + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // 그냥 false가 아니라 이런 평가식으로도 넣을 수 있음
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 고유한 식별자가 필요하거나 동시다발적으로 일어나는 코드에 우선순이 필요, 고유식별자가 필요할 경우.심볼은 동일한 아이로 만들어도 다른애로 나옴
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true 동일한 심볼로 만들고 싶을 때.
//mconsole.log(`value: ${symbol1}, type: ${typeof symbol1}`);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);
// .description 을 붙이지 않으면 오류남 .description을 붙여서 스트링으로 변환하여 출력해야함

// object, real-life object, data structure
const somi = {
    name: 'somi',
    age: 20
};
somi.age = 21;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
// 보통은 변수의 이름을 통해서 스트링타입을 예상하게 됨.
console.log(text.charAt(0)); //h 텍스트의 캐릭터의 0번째를 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// 이렇게 숫자로 다시 선언하면 타입이 스트링에서 숫자로 변환됨.
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// 스트링과 숫자를 붙이면 스트링으로 만들기도, 스트링끼리 나누면 숫자로 변환하기도 함.
// console.log(text.charAt(0)); // 텍스트의 캐릭터의 0번째를 출력했으나 오류..(숫자로 변환되었으니까)  ==> 타입이 런타임으로 결정되니까 생기는 오류.

//그래서 타입스크립트가 나옴. 자바 위에 타입이 올라가져있다고 생각하면 됨.
