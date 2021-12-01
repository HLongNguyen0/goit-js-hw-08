import { throttle } from 'lodash';

const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

let userMsg = JSON.parse(localStorage.getItem(key));

form.addEventListener('input', throttle(saveUserMsg, 500));
form.addEventListener('submit', submitUserMsg);

if (userMsg) {
  if (userMsg['email']) {
    email.value = userMsg['email'];
  }
  if (userMsg['message']) {
    message.value = userMsg['message'];
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
  console.log(userMsg);
}
