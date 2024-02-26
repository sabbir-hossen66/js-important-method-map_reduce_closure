function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  // console.log('greeting de', name);
}
greeting(greetingHandler, 'somename')








//ফাংশনে প্যারামিটার হিসেবে একটি ফাংশন পাঠানো হবে এবং ফাংশনের মধ্যে কল করা হবে এটি হচ্ছে কল ব্যাক ফাংশন !
function myFirst(mySecond, name) {
  mySecond(name);
}

function mySecond(name) {
  console.log('give me something', name);
}
// myFirst(mySecond, 'rahim')
myFirst(mySecond, 'rahim')











