// how to use setTimeout() 

const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener('click', saveUser);

function saveUser(){
    message.textContent = "User Registration Successful";

    setTimeout(() => {
        message.textContent = " ";
    }, 2000);

}