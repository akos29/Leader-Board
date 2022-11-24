export default class Score {
        static BASE_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores`;
      
        static addScore = async ({ user, score }) => {
          const game = {
            user,
            score,
          };
      
          const data = await fetch(this.BASE_URL, {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
            },
          });
          const response = await data.json();
          return response;
        };
      
        static getScore = async () => {
          const response = await fetch(this.BASE_URL);
          const games = await response.json();
          return games.result;
        };
      }
