import React from 'react';

const Joke = ({currentJoke, answers, highScore, currentJokeIndex, checkAnswer }) => {
  return (
    <div>
      <div className="score">
        Round: {currentJokeIndex+1}
        --Current Score: {highScore}--
      </div>

      <h2 className="currentQuestion">
        {currentJoke.question}</h2>

      <form>
        <button
          className = "button"
          type= "submit"
          name = {answers[0]}
          onClick = {checkAnswer}>
          {answers[0]}
        </button>
      </form>

      <form>
        <button
          className = "button"
          type= "submit"
          name = {answers[1]}
          onClick = {checkAnswer}>
          {answers[1]}
        </button>
      </form>

      <form>
        <button
          className = "button"
          type= "submit"
          name = {answers[2]}
          onClick = {checkAnswer}>
          {answers[2]}
        </button>
      </form>

      <form>
        <button
          className = "button"
          type= "submit"
          name = {answers[3]}
          onClick = {checkAnswer}>
          {answers[3]}
        </button>
    </form>
  </div>
  );
}


export default Joke;

