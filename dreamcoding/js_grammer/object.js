// objects
// one of the Javascript's data types.
// a collection of related data and/or funtionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key : value }; 오브젝트는 키와 변수의 집합체이다.

// const name = 'somi';
// const age = '4';
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }
// 이렇게 작성하면 속성을 계속계속 추가해줘야하는 단점이 있다. 아래와 같이 바꿔보자

// 1. Literals and properties
const obj1 = {}; // 'object loteral' syntax 괄호 사용하여 오브젝트 만들기
const obj2 = new Object(); // 'object constructor' synrax 클래스로 오브젝트 만들기

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const somi = { name: 'somi', age: 4 }; //name이 key, somi는 value. key는 항상 스트링타입으로 입력할 것
print(somi);
// 처음에는 이름과 나이만 설정해놓았다가

somi.hasJob = true;
// 이렇게 마음이 바뀌어서 나중에 추가하는 것도 가능하다. 다른언어에서는 흔한일은 아님. 그리고 이렇게 동적으로 코딩을 하면 나중에 유지보수하기가 어려움
console.log(somi.hasJob);

// with Javascript magic(dynamically typed language)
// can add properties later
delete somi.hasJob;
console.log(somi.hasJob);


// 2. Computed properties[]쓰는거
console.log(somi.name); //코딩하는 순간 해당하는 그 키에 대한 값을 받아오고싶을 때
console.log(somi['name']); // 정확히 어떤 키가 필요한지 모를때, 런타임에서 결정될때
somi['hasJob'] = true;
console.log(somi.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); //만약 내가 오브젝트를 사용자에게 받아서 설정하는경우 아래와 같이 name을 받았을 때 출력이 안됨. 이럴때는 computed properties를 씀
    console.log(obj[key]);
}
printValue(somi, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', agr: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('somi', 30);
// 반복적으로 이름이랑 나이를 지정해주고있는데 귀찮으니까 아래처럼 펑션을 만들어서 이름이랑 나이를 나오게 해준다. 그러면 위와같이 펑션이름과 속성을 넣으면 바로 출력가능
console.log(person4);

function Person(name, age) {
    return {
        name, // name: name, 키와 벨류의 이름이 동일하면 생략가능
        age,  // age: age,
    };
}
// 4. construct function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
}
//return this
// 이렇게 다른 계산을 하지않고 순수하게 오브젝트만 생성하는 함수들은 보통은 대문자로 시작하도록 함수를 만듦
// 그리고 리턴으로 함수값을 받기보다, 클래스에서 컨스트럭터에게 했던것처럼, 위처럼 this를 사용해서 함수값을 받음
// const person4 = new Person('somi', 30); 호출시에도 클래스에서 오브젝트를 만드는것처럼 할 수 있음

// 5. inoperator: property existence check (key on obj)
console.log('name' in somi);
console.log('age' in somi);
console.log('random' in somi);
console.log(somi.random); //갑자기 이렇게 정의하지 않은 함수를 넣으면 언디파인이 나옴 반대로 말하면 해당하는 키가 오브젝트에 있는지 확인할 수 있는거지

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in somi) { //소미가 가진 키들이 블럭을 돌때마다 앞에 키라는 지역변수에 할당이 됨. 그래서 아래처럼 출력하면 엘리안에 있는 모든 키들이 출력됨 위에 그동안 썻던 콘솔로그를 다 지우고 보면~ 소미 안에 있는 모든 키들이 나오는게 보이지~
    console.log(key);
}

// for of(value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length ;) 이렇게 원래 길게 작성해야하는데
for (value of array) {
    console.log(value);
} // 이렇게 for of를 사용하면 어레이에 할당된 숫자들이 한번씩 다 돌기때문에 많이 작성 안해도 됨.

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'somi', age: '20'}; // 유저는 메모리의 레퍼런스를 가리키고있는데 이 레퍼가 이름은 소밍이고 나이는 20을 가리키고 있음
const user2 = user;
user2.name = 'coder';
console.log(user);
// 이렇게 유저 2의 이름을 변경하고 유저를 콘솔로그에서 불러오면 이름이 코더로 변경됨

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);
// =아래와 동일한 코드임
// const user4 = Object.assign({}, user);
// console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 믹스드 하면 바로 뒤에 있는 애로 덮어씌우므로 블루가 나옴.

