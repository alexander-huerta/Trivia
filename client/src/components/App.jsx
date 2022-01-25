import React from 'react';
import questions from '../../../database/sample.js'
import Question from './Question.jsx'
import NextQuestion from './NextQuestion.jsx'
import GameOver from './GameOver.jsx'
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestions: questions.questions.results,
      currentQuestion: {},
      answers: [],
      currentQuestionIndex: 0,
      highScore: 0
     };
     this.checkAnswer = this.checkAnswer.bind(this)
     this.loadNextQuestion = this.loadNextQuestion.bind(this)
  }

  componentDidMount() {
    this.loadNextQuestion(0)
  }

  checkAnswer(e) {
    let {highScore, currentQuestion, currentQuestionIndex } = this.state;
    let newIndex = currentQuestionIndex+=1;
    e.preventDefault();
    if(e.target.name === currentQuestion.correct_answer) {
      let newScore = highScore+=1;
      this.setState({highScore: newScore})
      this.loadNextQuestion(newIndex)
      //style button GREEN
    } else {
      this.loadNextQuestion(newIndex)
      //style button RED
    }
  }

  loadNextQuestion(index) {
    let {currentQuestions, currentQuestionIndex, currentQuestion } = this.state;
    let allAnswers = currentQuestions[index].incorrect_answers;
      allAnswers.push(currentQuestions[index].correct_answer)
    let newQuestion = currentQuestions[index]
    this.setState({currentQuestionIndex: index})
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


  render() {
    let {currentQuestion, answers, currentQuestionIndex, highScore, loadNextQuestion } = this.state;

    let shuffledAnswers = this.shuffleAnswers(answers)

    if(currentQuestionIndex === 0) {
      return (
        <div>
          <Question
          currentQuestion ={currentQuestion}
          answers = {shuffledAnswers}
          highScore = {highScore}
          currentQuestionIndex ={currentQuestionIndex}
          checkAnswer = {this.checkAnswer}
          />
        </div>
      )
    } else if(currentQuestionIndex <= 10) {
      return (
        <div>
          <NextQuestion
          currentQuestion ={currentQuestion}
          answers = {shuffledAnswers}
          highScore = {highScore}
          currentQuestionIndex ={currentQuestionIndex}
          checkAnswer = {this.checkAnswer}
          loadNextQuestion = {this.loadNextQuestion}
          />
        </div>
      )
    } else {
      return (
        <div>
          <GameOver
          highScore = {highScore}
          />
        </div>
      )
    }




  }
}

export default App;