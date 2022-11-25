import * as el from './elementVar.js';
import Score from './score.js';

const generateScore = () => {
    el.scores.innerHTML = '';
    Score.getScore().then((result) => {
        result.forEach(res => {
            el.scores.innerHTML +=`<p>${res.user} : ${res.score}</p>`;
      });
});

}

export default generateScore;