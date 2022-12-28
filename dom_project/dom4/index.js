//How to find html element

let myDiv = document.querySelector("#my_div");
let heading1 = document.getElementsByTagName("h1")[0];
let heading2 = document.getElementsByTagName("h1")[1];


//How to create a html element using javascript

let heading3 = document.createElement("h1");
let text = document.createTextNode("Dinajpur");
heading3.appendChild(text);

myDiv.appendChild(heading3);

//how to remove html element using javascript

myDiv.removeChild(heading3);

//how to add a html element before first element

myDiv.insertBefore(heading3, heading1)


