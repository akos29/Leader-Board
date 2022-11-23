import './style.css';
import { form, refresh } from './modules/elementVar.js';
import generateScore from './modules/generateScore.js';
import { addNewScore } from './modules/addNewScore.js';

function component() {
  document.addEventListener('DOMContentLoaded', () => {
    generateScore();

    form.addEventListener('submit', addNewScore);
    refresh.addEventListener('click', generateScore);
  });
}

component();