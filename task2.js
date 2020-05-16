console.log(2);
console.log(3);

function timeTwoSec() {
  console.log("message two seconds");
}

setTimeout(timeTwoSec,2000);
setTimeout(function () {
  console.log("Inside timeout, after 5000 seconds");
}, 5000);

console.log("End");


