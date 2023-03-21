/* const age = parseInt(prompt("How old are you?"));

if (isNaN(age) ||age <0) {
  console.log("Please write a positive number");
} else if ( age < 18) {
  console.log("You are too young");
} else if(age>=18 &&age <=50) {
  console.log("You can drink");
}else if (age>50 && age <= 80) {
  console.log("You should exercise");
} else if(age ===100){
console.log("wow you are wise")
} else if (age> 80 ) {
  console.log("You can do what ever you want")
}
/* 결국 ||연산자에서는
 폴스가 되기 위해서는 모두 폴스여야하는거고 둘중 하나라도 트루면 트루 */
/* 하지만 &&연산자에서는
트루가 되기 위해서 모두 트루여야하는거고 둘중 하나라도 폴스면 폴스 */