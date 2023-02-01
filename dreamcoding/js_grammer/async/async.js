// async & await
// clear style of using promise 

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return 'ellie';
}
//async로 감싸주면 promise로 바뀜.

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple(); // 프로미스를 사용해서 병렬구조를 만들어줌 바로 위 코드로 실행
  const bananaPromise = getBanana();
  const apple = await applePromise; // 사과랑 바나나는 관련이 없는 애들이랑서 굳이 기다릴필요가없음
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// 보통 이렇게 복잡하게 코딩하지않음

pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}// promise all을 이용해서 한번에 가져올 수 있음
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);