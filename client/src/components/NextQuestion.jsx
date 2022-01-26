import React from 'react';

const NextQuestion = ({currentQuestion, answers, currentScore, highScore, currentQuestionIndex, checkAnswer, loadNextQuestion, username }) => {
  return (
    <div className = "container">

    <div className = "userInfoContainer">
      <div>
        Username : {username}
      </div>
      <div >
        Round: {currentQuestionIndex+1}
      </div>
      <div>
      Current Score: {currentScore}
      </div>
      <div>
      High Score: {highScore}
      </div>
    </div>

   <h2 className="question">
    {currentQuestion.question}</h2>




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
          className = "button altButton"
          type= "submit"
          name = "nextQuestion">
        Next Question
      </button>
   </form>

    </div>
  );
}


export default NextQuestion;

