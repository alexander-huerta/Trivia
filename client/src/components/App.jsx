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
    let {currentQuestions, currentQuestionIndex } = this.state;
    let allAnswers = [];

    currentQuestions[currentQuestionIndex].incorrect_answers.forEach((answer) => {return allAnswers.push(answer)})

    allAnswers.push(currentQuestions[currentQuestionIndex].correct_answer)


    this.setState({answers: allAnswers})
    this.setState({currentQuestion: currentQuestions[currentQuestionIndex]})

  }




  checkAnswer(e) {
    let {highScore, currentQuestion } = this.state;
    e.preventDefault();
    if(e.target.name === currentQuestion.correct_answer) {
      let newScore = highScore+=1;
      this.setState({highScore: newScore})
      this.loadNextQuestion()
      //style button GREEN

    } else {
      this.loadNextQuestion()
      //style button RED
    }
  }

  loadNextQuestion() {
    let {currentQuestions, currentQuestionIndex, currentQuestion } = this.state;
    let newIndex = currentQuestionIndex+=1;
    let newQuestion = currentQuestions[newIndex]
    this.setState({currentQuestionIndex: newIndex})
    this.setState({currentQuestion: newQuestion})
  }

  shuffleAnswers(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }



  render() {
    let {currentQuestions, answers, currentQuestionIndex, highScore, loadNextQuestion, currentQuestion } = this.state;

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