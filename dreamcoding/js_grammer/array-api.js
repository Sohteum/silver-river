// Q1. make a string out of an array
{
  // const food = ["🍕", "🍔", "🍟"];
  // const result = food.join();
  // console.log(result);

   // 만약 괄호안에 ','(구분자separator)를 넣으면 적용됨. 구분자를 생략하면 배열 요소가 쉼표로 구분된다.

}

// Q2. make an array out of a string
{
  const food = "🍕,🍔,🍟";
  // const split_string = food.split(",");
  // console.log(food.split());
  const result = food.split();
  console.log(result); 
  // 스플릿은 구분자를 넣어줘야함. 지정된 구분기호를 사용하여 문자열을 하위문자열로 분할하고 배열로 반환한다.
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
  // const result = array.reverse();
  // console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // array.splice(0, 2); splice는 기존 배열에서 해당하는 문자열을 삭제하는것. 새로운 배열을 만드는것이 아님. 그러므로 문제와는 맞지 않는다.
  // console.log(array);
  const result = array.slice(2, 5); // 배열의 복사본을 반환함. 보여질 시작인덱스를 지정하고, 끝 인덱스를 지정하면되는데, 인덱스의 end요소를 제외하므로 인덱스 4까지보고싶으면 인덱스 5를 적으면 됨.
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function (student, index) {
    return student.score === 90;
    // = const result = students.find((student) => student.score === 90);
  });

  console.log(result);
  // this, value, index, obj네가지 인자가 전달되고, 값이 불리언 값으로 전달된다.
}

// Q6. make an array of enrolled students 수업에 등록한 학생만 찾기
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // 주어진 애들을 펑션을 줘서 그 펑션기능에 따라 변환. 여기서는 스튜던트값에 스코어만 얻었지만 *를 넣으면 거기서 2배를 얻을 수도 있고 맵핑을 할수있음.
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // 배열에 들어있는 모든 요소들이 이 조건을 충족해야지만 true가 나옴.
  console.log(!true);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
    // = const result = students.reduce((prev, curr) => prev + curr.score, 0);
  }, 0); // 0을 넣으면 0부터 시작됨.(이니셜값=0)
  console.log(result / students.length); // 그럼 전체 다 더한 369출력됨.
  //콜백이나 이니셜밸류를 전달하는데, 배열의 모든 요소들마다 리턴이 되고 함께 누적된 결과값을 리턴한다. 우리가 리턴한 값 즉 커런이 프립으로 전달이 됨. 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 쓴다. 리듀스롸잇은 배열의 가장 뒤에서 부터 시작하는것.
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    //.filter((score) => score >= 50) 이렇게도 해볼수있음
    .join();
  console.log(result);
} //먼저 맵핑을 해서 점수들만 들어있는 배열을 만든다음에 조인으로 스트링으로 변환

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // b - a 로 하면 반대로 값이 큰것부터 나오게 됨
    .join();
  console.log(result);
}
