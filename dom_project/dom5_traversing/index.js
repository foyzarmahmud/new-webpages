// Downwards - parent ==> children

let studentList = document.querySelector(".student_list");
let student1 = studentList.querySelector("li").style.color = "pink";
let student2 = studentList.querySelector(".student2").style.color = "green";
let student3 = studentList.children[2].style.color = "blue";
let student4 = studentList.children[3].style.color = "aqua";

// Upwards - children ==> parents

let child1 = document.querySelector("li"); //.style.color = "red";
let parentChil = child1.parentElement;
parentChil.style.backgroundColor = "red";

// Sideways - NextElementSibling, PreviousElementSibling

let studenThree = document.querySelector(".student3"); //.style.color = "red";
studenThree.previousElementSibling.style.color = "blue";