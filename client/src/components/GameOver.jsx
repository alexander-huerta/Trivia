import React from 'react';

const GameOver = ({highScore }) => {
  return (
    <div className = "gameOver">

    <h2>Nice Game!</h2>
    <h2>Score {highScore}</h2>


   <form>
      <button
          className = "button playAgain"
          type= "submit"
          name = "playAgain"
          onClick = {console.log('game over')}>
        PLAY AGAIN
      </button>
   </form>

    </div>
  );
}


export default GameOver;

