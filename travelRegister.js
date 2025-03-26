const registerButton = document.getElementById("register");

function register() {
    window.location.href = "register.html"; 
}

registerButton.addEventListener("click", register);


const submitBtns = document.querySelectorAll(".submit-btn");

submitBtns.forEach(button => {
    button.addEventListener("click", () => {
        alert("Form submitted");
    });
});
