import React from 'react';
import questions from '../../../database/sample.js'
import Question from './Question.jsx'
import NextQuestion from './NextQuestion.jsx'
import GameOver from './GameOver.jsx'
import LogIn from './LogIn.jsx'
import SignUp from './SignUp.jsx'



import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestions: questions.questions.results,
      currentQuestion: {},
      answers: [],
      currentQuestionIndex: 0,
      currentScore: 0,
      highScore: 0,
      username: 'anon',
      loggedIn: false
     };
     this.checkAnswer = this.checkAnswer.bind(this)
     this.loadNextQuestion = this.loadNextQuestion.bind(this)
     this.logIn = this.logIn.bind(this)



  }

  componentDidMount() {
    //load user & high scores
    this.loadNextQuestion(0)
  }

  checkAnswer(e) {
    let {currentScore, currentQuestion, currentQuestionIndex } = this.state;

    e.preventDefault();
    if(e.target.name === currentQuestion.correct_answer) {
      let newScore = currentScore+=1;
      this.setState({currentScore: newScore})
      //style button GREEN
    } else {
      //style button RED
    }
    let newIndex = currentQuestionIndex+=1;
    this.setState({currentQuestionIndex: newIndex})
    this.loadNextQuestion(newIndex)
  }

  loadNextQuestion(i) {
    let {currentQuestions, currentQuestion} = this.state;
    let allAnswers = currentQuestions[i].incorrect_answers;
      allAnswers.push(currentQuestions[i].correct_answer)
    let newQuestion = currentQuestions[i]
    this.setState({currentQuestion: newQuestion})
    this.setState({answers: allAnswers})
  }

  shuffleAnswers(answers) {
    let currentIndex = answers.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]];
    }
    return answers;
  }

  logIn() {
    this.setState({loggedIn: true})
  }


  render() {
    let {currentQuestion, answers, currentQuestionIndex, currentScore, highScore, loadNextQuestion, loggedIn, logIn, username } = this.state;
    let shuffledAnswers = this.shuffleAnswers(answers)

    if(loggedIn) {
      return (
        <div> <SignUp logIn = {this.logIn}/></div>
      )
    } else if(currentQuestionIndex === 0) {
      return (
        <div>
          <Question
          currentQuestion ={currentQuestion}
          answers = {shuffledAnswers}
          currentScore = {currentScore}
          highScore = {highScore}
          username = {username}
          currentQuestionIndex ={currentQuestionIndex}
          checkAnswer = {this.checkAnswer}
          />
        </div>
      )
    } else if(currentQuestionIndex <= 9) {
      return (
        <div>
          <NextQuestion
          currentQuestion ={currentQuestion}
          answers = {shuffledAnswers}
          currentScore = {currentScore}
          highScore = {highScore}
          username = {username}
          currentQuestionIndex ={currentQuestionIndex}
          checkAnswer = {this.checkAnswer}
          loadNextQuestion = {this.loadNextQuestion}
          onLoadNextClick = {this.onLoadNextClick}

          />
        </div>
      )
    } else {
      return (
        <div>
          <GameOver
          currentScore = {currentScore}
          highScore = {highScore}
          username = {username}/>
        </div>
      )
    }




  }
}

export default App;