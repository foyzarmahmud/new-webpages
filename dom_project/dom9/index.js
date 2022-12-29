let myVar = document.querySelector("button");

myVar.addEventListener("click", function(){
    alert("Okay you click me") //এনোনিমাস ফাংশন
})

myVar.addEventListener("mouseover",mouse);

function mouse(){
    myVar.classList.add("new_style");
};
myVar.addEventListener("mouseout", mouse_in)
function mouse_in(){
    myVar.classList.remove("new_style");
}