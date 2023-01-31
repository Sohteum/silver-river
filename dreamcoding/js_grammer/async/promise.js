'use strict';

// Promise is a JavaScript object for asynchronose operation.
// 정보를 제공하는 프로듀서와 사용하는 컨슈머를 생각하기, state생각하기
// State: pending -> fulfilled or rejected
// producer vs Consumer

// 1. producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공한 경우
    // reject(new Error('no network')); // 실패한 경우
  }, 2000);
});

// 2. consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  }); //실패하든 성공하든 마지막으로 실행됨

  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));
  // then은 값을 바로 전달해도 되고, 프로미스를 전달해도 됨.

  // 4. Error Handling
  const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
  const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} =>🥚`)), 1000);
  });
  const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} =>🥘`), 1000);
  });

  // getHen()
  // .then(hen => getEgg(hen))  
  // .then(egg => cook(egg))  
  // .then(meal => console.log(meal));

  getHen()
  .then(getEgg)
  .catch(error => {
    return '🍞';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

