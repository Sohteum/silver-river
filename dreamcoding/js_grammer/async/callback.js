'use strict'

// javaScript is synchronous.
// Execute the code block in order after hoisting.
// 동기와 비동기, synchronous와 asynchronous 자바스크립트는 동기적이야. 호이스팅이 된 후부터 코드가 우리가 작성한 순서대로. 동기적으로 실행된다는 것.
//hoisting: var, function declartion 함수선언들이 제일 위로 올라가는것.
{
	console.log('1');
	console.log('2');
	console.log('3');
}

// 이렇게 코드를 작성한 순서대로 동기적으로 출력이 됨.


// 비동기적이라는건 코드가 작성한 순서와 상관없이 출력이 되는거겠죠
{
	console.log('1');
	// setTimeout(function () {
	//     console.log('2');
	// }, 1000);
	setTimeout(() => console.log('2'), 1000);
	// 1000밀리세컨, 즉 1초가 지나면 내가 설정한 펑션을 실행해줘 라는것
	console.log('3');
	// 콘솔로그 1이 먼저 출력되고, 셋타임아웃은 브라우저api니까 무조건 브라우저한테 먼저 요청을 보냄 그리고 다시 콘솔로그로 와서 다음걸 실행함. 그리고 브라우저에서 1초후에 출력ㅎ~라고 오면 다시 출력하는것 
	// 셋타임아웃이 바로 실행되는게 아니라 함수 안에 하나의 파라미터 안에 지정한 함수를 전달해줌. 1초가 지난다음에 나중에 다시 콜해줘! 그래서 콜백함수. 콜백함수는 보통 arrow펑션으로 간단하게 작성이 가능함
}

// 콜백함수라는건 우리가 전달해준 함수를 니가 나중에 불러줘! 라는 개념 그래서 배열에 있는 map, filter, find이런거 사용해서 콜백함수를 썼었음


// 그럼 콜백이 항상 비동기일때만 쓰이냐? 그건 아님. 두가지로 나뉘는데

// Synchronous callback 즉각적으로 언제 콜백해주는지 예측할 수 있음
function printImmediately(print) {
	print();
}
// 콜백을 파라미터 인자로 받아서 일을 처리하는 함수를 만들어보자! printImmediately라는 함수를 만들고, 뭔진모르지만 print하는 콜백을 받아서 그 콜백을 바로 print를 실행하는 함수를 만들어볼수있음.

printImmediately(() => console.log('hello'));
// 이 함수를 이용할 때는 printImmediately를 호출할건데 얘는 프린트라는 콜백함수를 전달받음. 그리고 자바스크립드는 타입이 아니라서 어떤 타입을 받을지 예측불가 지만 아무런 인자가 없이 간단하게 콘솔로그출력하는 함수를 만들어보자. 
//여기서 함수의 선언은 호이스팅이 된다고 했으니까 자바스크립트는 펑션선언을 맨위로 올렸을것이야.


// Asybchronous callback 나중에, 언제 콜백해주는지 모름
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
	// 프린트와 얼마정도 타임아웃을 하고싶은지 밀리세컨으로 인자를 두개 받아와보자. 그래서 브라우저api인 setTimeout을 이용해서 우리가 원하는 print라는 콜백함수를 호출하고, 타임아웃이라는 인자를 전달해서 그래서 결국 이 함수는 셋타임아웃을 감싸는, 래핑하고 있는 함수인것.  전달받은 프린트와 타임아웃을 결국에는 셋타임아웃에 요청하는것임.
}
printWithDelay(() => console.log('async callback'), 2000);

// 아까와 마찬가지로 자바스크립트에서는 선언이 호이스팅되므로, 얘들은 위로 올라갔을거고,  나머지가 순서대로 출력이 되는거징.


//자바스크립트는 이렇게 함수를 콜백형태의 인자로. 다른 함수에 전달할 수도 있고, 또는 변수에 할당할 수도 있다. 언어들마다 콜백을 지원하는 형태는 다름.




//Callback Hell Example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'ellie') {
				onSuccess({ name: 'ellie', role: 'admin' });
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id,
	password,
	user => {
		userStorage.getRoles(
			user,
			userWithRole => {
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
			},
			error => {
				console.log(error);
			}
		);
	},
	error => {
		console.log(error);
	}
);