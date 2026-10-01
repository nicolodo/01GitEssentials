
let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false
// You can use string literals to log out more details about your variables:

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB); // Output: Is 1 greater than 2? false
console.log(`Is ${a} less than ${b}?`, isALessThanB); // Output: Is 1 less than 2? true
console.log(`Is ${a} equal to ${b}?`, isAEqualToB); // Output: Is 1 equal to 2? false

let favouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 3;

const sentence = `My favourite programming language is ${favouriteProgrammingLanguage}. We're on day ${currentCourseDay} of the course.`;

