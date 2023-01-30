// JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
// 오브젝트를 제이슨으로 변환할 수 있음 불리언타입도 가능하다!
console.log(json); 

json = JSON.stringify(['cat', 'dog']);
console.log(json);
// 콘솔로그보면 싱글쿼트가 아닌 더블쿼트!, 제이슨의 규격사항이다. 어느정도 배열처럼 보이게 표기가 된다.

const cat = {
    name: 'nabi',
    color: 'cheeze',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    }
};

json = JSON.stringify(cat);
console.log(json);
// 데이트라는 함수가 스트링으로 변환되어서 제이슨으로 만들어진걸 볼수있고, 확인해보면 jump라는 함수는 오브젝트에 있는 데이터가 아니기때문에 제이슨에 포함되지않은걸 볼수있다.& 자바스크립트에만 있는 특별한 데이터도 제이슨에는 포함되지않음.(eg.symbol)

json = JSON.stringify(cat, ['name', 'color']);
console.log(json);
// 제이슨을 좀더 통제하고싶다면 이렇게 쉼표를 쓰면 추가정보가 뜨는데 여기보면 함수형태로 입력해도 되고 배열형태로 입력해도 됨. 예를 들면 name만, 내가 원하는 property만 골라서 출력할 수 있음
json = JSON.stringify(cat, (key, value) => {
    console.log(`key: ${key}, ${value}`);
    // return value;
    return key === 'name' ? 'somi' : value;
    // 키가 이름이 나오면 무조건 소미로 나오게 설정하고 이름이 아닌경우에는 원래 밸류 써야지 이런것도 가능
});
console.log(json);
// 혹은 콜백함수를 통해서 위처럼 입력하면 모든 키와 벨류들이 출력이 됨. 확인해보면 가장 위에 출력된건 토끼오브젝트를 감싸고있는것, 그다음은 이름부터 쭉쭉 나오는게 보임.

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(cat);
// const obj = JSON.parse(json);
// parse라는 api를 이용해서 변환하고싶은 제이슨을 전달해주기만 하면 됨.
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}); // 이렇게 스트링이었던 생일을 다시 오브젝트로 부여해서 출력
console.log(obj);
cat.jump();
// obj.jump(); 에러발생
// 우리가 고양이를 제이슨으로 변환할 때는 함수가 포함되어있지않았음. 데이터들만 갔다가 데이터만 온거임.

console.log(cat.birthDate.getDate());
console.log(obj.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 에러발생
//생일은 제이슨으로 변환할때 스트링 타입으로 갔다가 다시 스트링 타입으로 왔음. 하지만 원래는 오브젝트임. 그래서 아까 json의 인터페이스인  ctrl클릭했을때 reviver라는 콜백함수를 사용하는거지