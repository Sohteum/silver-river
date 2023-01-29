'use strict'

// Array (자료구조 중 하나)

// 1. Declaration
const arr1 = new Array(); //뉴 라는 키워드를 이용해서 오브젝트 만들때처럼 만드는 방법
const arr2 = [1, 2];
// 배열은 인덱스를 기준으로 데이터가 저장되므로 인덱스를 통해 만들어야 사용할때 편리함

// 2. Index position
const fruits = ['🍕', '🍔'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length - 1); // 보통 배열에서 가장 마지막을 찾을때는 배열 길이에 -1을 해줌

// 3. Looping over an arr ay
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// 특정한 액션을 수행한다. 콜백함수(우리가 전달한 액션)를 받아 어레이 안에 요소마다! 콜
// ctrl + 해당함수클릭하면 설명나오는데, 여기서 forEach는 인자를 세 개 받을 수 있음. value, index, array 이렇게 총 세개. 그걸 넣어보면,
// fruits.forEach(function () {
//     console.log('he')
// });
// 콘솔로그에 he가 두번 호출됨. 데이터가 총 두개가 들어있으니까!!

// fruits.forEach(function (fruit, index) {  //보통 array는 출력안함
// console.log(fruit, index);
// });
// 그리고 이렇게 이름이 없는 anonymous function은 에뤄우펑션..가능.

fruits.forEach((fruit) => console.log(fruit)); // arrow펑션은 중괄호도 필요없고 ;도 필요없음.
//배열 안에 들어있는 벨류들마다 내가 전달한 함수를 출력한다.

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits. push('🍟', '🌭');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beggining
fruits.unshift('🍿', '🧂');
console.log(fruits);

// shift: remove an item from the begginig
fruits.shift();
fruits.shift();
console.log(fruits);

// ㅜote!! shift, unshift are slower than pop, push
//뒤에부터 하면 빈공간에서 가감을 하면됨. 기존 데이터는 건드리지 않음. 반대로 앞에서 하면 뒤에서부터 한칸씩 옮겨담고 맨처음걸 삭제하는것임.그래서 배열의 길이가 길수록 느려질수밖에. 중간에 넣어도 인덱스를 이용해서 할 수 있어서 빠르게 가능함
// splice: remove an item by index position
fruits.push('🥓', '🥚')
console.log(fruits);
// fruits.splice(1);
//지정된 위치에서 데이터 삭제가능, 원하는 인덱스만 적고 몇개 지울건지 안적으면? 우리가 원하는 인덱스부터 다 지워버림.
fruits.splice(1, 1);
// 인덱스 1부터 한개만 지울거야 
console.log(fruits);

fruits.splice(1, 1, '🥞', '🍞');
// 인덱스 1번(두번째거)부터 하나만 지우고 그 자리에 이거 넣어줘
console.log(fruits);

// combine two arrays
const fruits2 = ['🍖', '🥩'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥚')); // 내가 달걀을 찾고싶은데 몇번째 인덱스인지 모를때
console.log(fruits.indexOf('🥓'));
console.log(fruits.includes('🍕')); //해당하는게 있는지 불리언 타입으로 출력하는 함수
// includes
console.log(fruits.includes('🧀')); //이건 없는거니까 false
console.log(fruits.indexOf('🍙')); //배열 안에 가지고있지 않은걸 출력하면 -1 이 출력됨.

// lastIndexOf
console.clear();
fruits.push('🍕');
console.log(fruits);
console.log(fruits.indexOf('🍕')); //indexOf는 해당 값을 처음 만나면 그 값을 리턴함
console.log(fruits.lastIndexOf('🍕')); // 가장 마지막에 있는 값을 출력

