import { throttle } from 'lodash';

const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let userMsg = JSON.parse(localStorage.getItem(key));

if (userMsg) {
  for (const elem in userMsg) {
    form.elements[elem].value = userMsg[elem];
  }
}

form.addEventListener('input', throttle(saveUserMsg, 500));
form.addEventListener('submit', submitUserMsg);

function saveUserMsg(event) {
  let userInfo = {};
  if (localStorage.getItem(key)) {
    userInfo = JSON.parse(localStorage.getItem(key));
  }
  userInfo[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(userInfo));
}

function submitUserMsg(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(key);
}
