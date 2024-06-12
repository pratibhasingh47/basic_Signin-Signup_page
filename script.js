const loregeBox = document.querySelector(".lorege-box");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");



registerlink.addEventListener("click", () => {
    loregeBox.classList.add("active");
});

loginlink.addEventListener("click", () => {
    loregeBox.classList.remove("active");
});
