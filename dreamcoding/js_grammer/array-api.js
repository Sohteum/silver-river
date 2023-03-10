// Q1. make a string out of an array
{
  // const food = ["๐", "๐", "๐"];
  // const result = food.join();
  // console.log(result);

   // ๋ง์ฝ ๊ดํธ์์ ','(๊ตฌ๋ถ์separator)๋ฅผ ๋ฃ์ผ๋ฉด ์ ์ฉ๋จ. ๊ตฌ๋ถ์๋ฅผ ์๋ตํ๋ฉด ๋ฐฐ์ด ์์๊ฐ ์ผํ๋ก ๊ตฌ๋ถ๋๋ค.

}

// Q2. make an array out of a string
{
  const food = "๐,๐,๐";
  // const split_string = food.split(",");
  // console.log(food.split());
  const result = food.split();
  console.log(result); 
  // ์คํ๋ฆฟ์ ๊ตฌ๋ถ์๋ฅผ ๋ฃ์ด์ค์ผํจ. ์ง์ ๋ ๊ตฌ๋ถ๊ธฐํธ๋ฅผ ์ฌ์ฉํ์ฌ ๋ฌธ์์ด์ ํ์๋ฌธ์์ด๋ก ๋ถํ ํ๊ณ  ๋ฐฐ์ด๋ก ๋ฐํํ๋ค.
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
  // array.splice(0, 2); splice๋ ๊ธฐ์กด ๋ฐฐ์ด์์ ํด๋นํ๋ ๋ฌธ์์ด์ ์ญ์ ํ๋๊ฒ. ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋๋๊ฒ์ด ์๋. ๊ทธ๋ฌ๋ฏ๋ก ๋ฌธ์ ์๋ ๋ง์ง ์๋๋ค.
  // console.log(array);
  const result = array.slice(2, 5); // ๋ฐฐ์ด์ ๋ณต์ฌ๋ณธ์ ๋ฐํํจ. ๋ณด์ฌ์ง ์์์ธ๋ฑ์ค๋ฅผ ์ง์ ํ๊ณ , ๋ ์ธ๋ฑ์ค๋ฅผ ์ง์ ํ๋ฉด๋๋๋ฐ, ์ธ๋ฑ์ค์ end์์๋ฅผ ์ ์ธํ๋ฏ๋ก ์ธ๋ฑ์ค 4๊น์ง๋ณด๊ณ ์ถ์ผ๋ฉด ์ธ๋ฑ์ค 5๋ฅผ ์ ์ผ๋ฉด ๋จ.
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
  // this, value, index, obj๋ค๊ฐ์ง ์ธ์๊ฐ ์ ๋ฌ๋๊ณ , ๊ฐ์ด ๋ถ๋ฆฌ์ธ ๊ฐ์ผ๋ก ์ ๋ฌ๋๋ค.
}

// Q6. make an array of enrolled students ์์์ ๋ฑ๋กํ ํ์๋ง ์ฐพ๊ธฐ
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // ์ฃผ์ด์ง ์ ๋ค์ ํ์์ ์ค์ ๊ทธ ํ์๊ธฐ๋ฅ์ ๋ฐ๋ผ ๋ณํ. ์ฌ๊ธฐ์๋ ์คํ๋ํธ๊ฐ์ ์ค์ฝ์ด๋ง ์ป์์ง๋ง *๋ฅผ ๋ฃ์ผ๋ฉด ๊ฑฐ๊ธฐ์ 2๋ฐฐ๋ฅผ ์ป์ ์๋ ์๊ณ  ๋งตํ์ ํ ์์์.
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // ๋ฐฐ์ด์ ๋ค์ด์๋ ๋ชจ๋  ์์๋ค์ด ์ด ์กฐ๊ฑด์ ์ถฉ์กฑํด์ผ์ง๋ง true๊ฐ ๋์ด.
  console.log(!true);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
    // = const result = students.reduce((prev, curr) => prev + curr.score, 0);
  }, 0); // 0์ ๋ฃ์ผ๋ฉด 0๋ถํฐ ์์๋จ.(์ด๋์๊ฐ=0)
  console.log(result / students.length); // ๊ทธ๋ผ ์ ์ฒด ๋ค ๋ํ 369์ถ๋ ฅ๋จ.
  //์ฝ๋ฐฑ์ด๋ ์ด๋์๋ฐธ๋ฅ๋ฅผ ์ ๋ฌํ๋๋ฐ, ๋ฐฐ์ด์ ๋ชจ๋  ์์๋ค๋ง๋ค ๋ฆฌํด์ด ๋๊ณ  ํจ๊ป ๋์ ๋ ๊ฒฐ๊ณผ๊ฐ์ ๋ฆฌํดํ๋ค. ์ฐ๋ฆฌ๊ฐ ๋ฆฌํดํ ๊ฐ ์ฆ ์ปค๋ฐ์ด ํ๋ฆฝ์ผ๋ก ์ ๋ฌ์ด ๋จ. ์ฐ๋ฆฌ๊ฐ ์ํ๋ ์์์ ๋ถํฐ ๋ชจ๋  ๋ฐฐ์ด์ ๋๋ฉด์ ์ด๋ค ๊ฐ์ ๋์ ํ  ๋ ์ด๋ค. ๋ฆฌ๋์ค๋กธ์์ ๋ฐฐ์ด์ ๊ฐ์ฅ ๋ค์์ ๋ถํฐ ์์ํ๋๊ฒ.
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    //.filter((score) => score >= 50) ์ด๋ ๊ฒ๋ ํด๋ณผ์์์
    .join();
  console.log(result);
} //๋จผ์  ๋งตํ์ ํด์ ์ ์๋ค๋ง ๋ค์ด์๋ ๋ฐฐ์ด์ ๋ง๋ ๋ค์์ ์กฐ์ธ์ผ๋ก ์คํธ๋ง์ผ๋ก ๋ณํ

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // b - a ๋ก ํ๋ฉด ๋ฐ๋๋ก ๊ฐ์ด ํฐ๊ฒ๋ถํฐ ๋์ค๊ฒ ๋จ
    .join();
  console.log(result);
}
