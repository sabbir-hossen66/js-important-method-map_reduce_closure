// const people = {
//   name: 'sabbir hossen',
//   age: 20,
//   phone: '01744662545',
// }
// const { phone } = people;
// console.log(phone);

// function arr() {
//   return [4, 5, 6, 3, 8, 6]
// }

// const [num1, , , , num5] = arr()
// console.log(num1);
// console.log(num5);




const student = {
  name: 'sabbir',
  roll: 4,
  sreni: 'ten',
  result: {
    science: 'a+',
    math: 'a',
    mathOption: {
      higherMath: '2.35',
      genaralMath: '3.21'
    },
    english: 'a-',
    valoHoice: {
      name1: 'shamim',
      name2: 'rafiq',
    }


  }

}

// const { result } = student;


// const see = student.result.valoHoice.name2
const see = student.result.mathOption.genaralMath
console.log(see);