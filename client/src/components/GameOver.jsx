import React from 'react';

const GameOver = ({highScore, username, currentScore}) => {
  return (
    <div className = "container">
      <div className = "userInfoContainer">
      <div>Nice Game! {username}</div>
      <div>Score {currentScore}</div>
      <div>Your high score {highScore}</div>
    </div>

      <form>
        <button
          className = "button altButton"
          type= "submit"
          name = "playAgain">
          PLAY AGAIN
        </button>
      </form>

    </div>
  );
}

export default GameOver;

