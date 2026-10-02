
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

// --------------------DOM Manipulation Section --------------------------- //

console.log("Dom manipulation section");

const body = document.querySelector("body");
console.log(body);

const DOM = document.getElementsByClassName("DOM");
console.log(DOM);

const h1 = document.querySelector("h1");
console.log(h1);
// modify h1's contents
h1.textContent = "Hello world!";

const image = document.querySelector("img");
image.src = "images/puppy.png";

// DOM.appendChild(h1);
const h2 = document.createElement("h1");
h2.textContent = "This is a heading!";
body.appendChild(h2);

// Removing elements
h2.remove();

//  
const list = document.createElement("ol");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
li.textContent = "I'm in the list!";
list.appendChild(li);
list.appendChild(h2);
li2.textContent = "i'm different";
li3.textContent = "i'm diffasdfasdferent";
li4.textContent = "i'm differeasldfkjasdflkasdjfsdfklsjnt";
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
body.appendChild(list);

// -------- Events ------------






