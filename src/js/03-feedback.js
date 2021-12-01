import { throttle } from 'lodash';

const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let userMsg = JSON.parse(localStorage.getItem(key));

form.addEventListener('input', throttle(saveUserMsg, 500));
form.addEventListener('submit', submitUserMsg);

if (localStorage.getItem(key)) {
  for (const elem in userMsg) {
    form.elements[elem].value = userMsg[elem];
  }
}

const userInfo = {};
function saveUserMsg(event) {
  userInfo[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(userInfo));
}

function submitUserMsg(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(key);
}
