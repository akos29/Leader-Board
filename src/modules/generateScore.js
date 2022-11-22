import * as el from './elementVar.js';

const generateScore = (name,score) => {

    for(let i=1; i<10; i+=1){
        el.scores.innerHTML +=`<p>${name} : ${score*10}</p>`;
        score=score+13;
    }
}

export default generateScore;