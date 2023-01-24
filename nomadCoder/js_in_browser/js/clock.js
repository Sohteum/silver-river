const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000)
// 5초마다 반복해서 sayHello라는 function을 실행

// setTimeout(sayHello, 5000);
// 5초 이후에 한번만 sayHello라는 function을 실행

getClock();
// 이걸 넣으면 새로고침을 하자마자 1초를 기다릴 필요 없이 바로 시계가 작동함. superCool.
setInterval(getClock, 1000);