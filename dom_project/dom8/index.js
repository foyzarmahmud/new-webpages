let para = document.querySelector("p");

function add_style(){
    para.classList.add("para")
}

function remove_style(){
    para.classList.remove("para");
    para.innerHTML = "Remove Style done"
}
