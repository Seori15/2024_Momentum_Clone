const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginOnSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  if (time.hours < 6) {
    greeting.innerText = `Good night, ${username}`;
  } else if (time.hours < 12) {
    greeting.innerText = `Good morning, ${username}`;
  } else if (time.hours < 18) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else {
    greeting.innerText = `Good evening, ${username}`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginOnSubmit);
} else {
  paintGreetings();
}
