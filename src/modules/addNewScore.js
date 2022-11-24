import * as el from './elementVar.js';
import Score from './score.js';

export const addNewScore = (e) => {
    e.preventDefault();
  
    const user = e.target.name.value;
    const score = e.target.score.value;
  
    if (user.trim().length>0 && score.trim().length>0) {
      Score.addScore({ user: user.trim(), score }).then((data) => {
        if (data.result === 'Leaderboard score created correctly.') {
          el.status.textContent = 'Your score was added successfully';
          el.status.classList.add('success');
         
          setTimeout(() => {
            el.status.classList.remove('success');
            el.status.innerHTML='';
          }, 3000);
        } else {
          el.status.textContent = 'Cannot add your score please try again later.';
          el.status.classList.add('fail');
          setTimeout(() => {
            el.status.classList.remove('fail');
            el.status.innerHTML='';
          }, 3000);
        }
      });
      form.reset();
    } else {
      el.status.textContent = 'Please enter a valid name and score';
      el.status.classList.add('fail');
      setTimeout(() => {
        el.status.classList.remove('fail');
        el.status.innerHTML='';
      }, 3000);
    }
  };
  