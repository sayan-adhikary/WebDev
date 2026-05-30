const form = document.getElementById("loginForm");
const userNameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const remindMeInput = document.getElementById("remindMe");

const STORAGE_KEY = "loginReminder";

window.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        const data = JSON.parse(savedData);
        userNameInput.value = data.userName || "";
        passwordInput.value = data.password || "";
        remindMeInput.checked = true;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (remindMeInput.checked) {
        const data = {
            userName: userNameInput.value,
            password: passwordInput.value
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        alert("Data saved in local storage.");
    } else {
        localStorage.removeItem(STORAGE_KEY);
        alert("Data removed from local storage.");
    }
});

remindMeInput.addEventListener("change", () => {
    if (!remindMeInput.checked) {
        localStorage.removeItem(STORAGE_KEY);
    }
});