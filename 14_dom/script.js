// console.log(window)
// console.log(window.document)
// console.dir(window.document)

// selecting the element with id name 
let para = document.getElementById("para");
console.log(para);
console.dir(para);

//selecting the element with class name
let headings = document.getElementsByClassName("heading");
console.log(headings);
console.dir(headings);

//selecting the element with tagname
let p = document.getElementsByTagName("p");
console.log(p)
console.dir(p)


//QuerySelector
//writing tags
let firstEle = document.querySelector("p"); // 1st element
console.dir(firstEle);

let allEle = document.querySelectorAll("p"); // All elements
console.dir(allEle);

//writing class
firstEle = document.querySelector(".heading"); // 1st element
console.dir(firstEle);

allEle = document.querySelectorAll(".heading"); // All elements
console.dir(allEle);

//writing id
firstEle = document.querySelector("#para"); // 1st element
console.dir(firstEle);

allEle = document.querySelectorAll("#para"); // All elements
console.dir(allEle);