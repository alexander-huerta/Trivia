import React from 'react';

const NextJoke = ({currentJoke, answers, highScore, currentJokeIndex, checkAnswer, loadNextQuestion }) => {
  return (
    <div>
      <div className="score">
        Round: {currentJokeIndex}
        Current Score: {highScore}
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

   <form>
      <button
          className = "button nextQuestion"
          type= "submit"
          name = "nextQuestion"
          onClick = {loadNextQuestion}>
        nextQuestion
      </button>
   </form>

    </div>
  );
}


export default NextJoke;

