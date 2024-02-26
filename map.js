const numbers = [1, 5, 3, 6, 8, 4];
const numbers2 = [4, 5, 6, 7, 8, 9];

const dubled = [];

// for (const num 4 of numbers) {
//   const double = num * 2;

//   dubled.push(double)

// }
// console.log(dubled);

const sum = numbers2.map((num) => {
  return num * 2;
})
// console.log(sum);






const count = [5, 7, 6];
const newArr = count.map(num => {
  return num * 2
});
console.log(newArr);

// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }