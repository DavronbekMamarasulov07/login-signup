
const signupBtn = document.querySelector("#signup-btn");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form"); 
const cancelBtn = document.querySelector("#cancel-btn");

const showSignupPage = function() {
    signupForm.classList.add("show");
    signupForm.classList.remove("hide"); 
    loginForm.classList.add("hide");
    loginForm.classList.remove("show"); 
};

const showFormPage = function() {
    signupForm.classList.add("hide");
    signupForm.classList.remove("show"); 
    loginForm.classList.add("show");
    loginForm.classList.remove("hide"); 
};

cancelBtn.addEventListener("click", showFormPage);
signupBtn.addEventListener("click", showSignupPage);
