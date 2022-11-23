import './style.css';
import generateScore from './modules/generateScore.js';

function component() {
  document.addEventListener('DOMContentLoaded', () => {
    generateScore('Abebe', 1);
  });
}

component();