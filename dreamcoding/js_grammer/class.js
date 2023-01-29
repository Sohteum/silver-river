'use strict';
// Object-oriented programming
// class: talplate 붕어빵을 찍어내는 붕어빵 틀같은 템플릿.
// object: instance of a class 틀로 만들어낸 붕어빵.
// JavaScript classes
// - introduced in ES6 그 전에는 클래스 없이 오브젝트를 만들었음
// - syntactical sugar over prototype-nased inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) { // 생성자를 이용해서 나중에 오브젝트를 만들때 필요한 데이터를 전달함
        // fields
        this.name = name; // 전달받은 데이터를 클래스에 존재하는 두가지 필드에 바로 할당해줌.
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value < 0) {
        //    throw Error('age can be negative');
        //}
        // 이렇게 에러를 사용해서 -를 못쓰게 해도 되고. 아래처럼 작성가능
        this._age = value < 0 ? 0 : value;
    }
    // 무한히 돌지 않게 하기 위해 age이름을 조금 다르게 설정한다.
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. fields (public, private)
// Too soon! 아직 지원이 잘 안됨
class Experiment {
    publicField = 2; // 외부에서 접근이 가능한 필드
    #privateField = 0; //접근이 불가능한 프라이빗 필드, 클래스 내부에서만 보여지고, 값을 읽고 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! static을 붙이면, 오브젝트와 상관없이 클래스와 연결되어있다.
// 오브젝트, 들어오는 데이터와 상관없이 공통적으로 클래스에서 쓸 수 있는거라면 스테틱과 스테틱메소드를 이용하여 작성하는것이 메모리의 사용량을 줄여줄 수 있음.
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 만약 스테틱을 넣지 않았다면, 오브젝트의 퍼블리셔를 출력할 수 있었을 것. 지금 얘는 오브젝트에 지정되어있는게 아니라 클래스 자체에 붙어있는 것.
console.log(Article.publisher); // 값이 다시 나오는 걸 볼 수 있음
Article.printPublisher();

// 5. Inheritance 상속과다양성
// a way for one class to extend another class.
// 공통점을 정의한 후 그 속성값을 재사용하면 더 편하지.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    } // 필드 세개

    draw() {
        console.log(`drawing ${this. color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
    // 메소드 두개
}

class Rectangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺'); // 이렇게 추가도 가능한데, 그러면 위에서 적용한 컬러 값이 안나옴 그래서 super를 써서 둘다 호출될 수 있게 해준다.
    }
}
// extends로 연장을 해주면 shape에 있는 요소들이 rectangle에 포함이 됨.
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    } // 이렇게 속성을 추가해줄 수 있음

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}
// 동일한 것들을 계속 재사용 가능

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf // 왼쪽의 오브젝트가 이 클래스를 이용해서 만든애가 맞는지 아닌지 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


// 엠디엔 자바스크립트 레퍼런스 페이지에 가면 내부에 포함된 오브젝트들이 어떤것들이 있는지 볼수있음