import React from 'react';
import jokes from '../../../database/sample.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJokes: jokes.jokes.results,
      currentJokeIndex: 0,
      currentQuestion: jokes.jokes.results[0].question,
      answers: [],
      correctAnswer: ''
     };
     this.checkAnswer = this.checkAnswer.bind(this)
  }

  componentDidMount() {
    let allAnswers = [];

    this.state.currentJokes[0].incorrect_answers.forEach((answer) => {return allAnswers.push(answer)})

    allAnswers.push(this.state.currentJokes[0].correct_answer)

    this.setState({correctAnswer: this.state.currentJokes[0].correct_answer})
    this.setState({answers: allAnswers})
  }


  checkAnswer(e) {
    e.preventDefault();
    if(e.target.name === this.state.correctAnswer) {
      alert('Nice Job!')
    } else {
      alert('ahh better luck next time')
    }

  }



  render() {
    return (
      <div>

      <h2>{this.state.currentQuestion}</h2>
      <form>
        <button
            type= "submit"
            name = {this.state.answers[0]}
            onClick = {this.checkAnswer}>
          {this.state.answers[0]}
        </button>
      </form>

      <form>
        <button
            type= "submit"
            name = {this.state.answers[1]}
            onClick = {this.checkAnswer}>
          {this.state.answers[1]}
        </button>
      </form>

      <form>
      <button
            type= "submit"
            name = {this.state.answers[2]}
            onClick = {this.checkAnswer}>
          {this.state.answers[2]}
        </button>
      </form>

      <form>
      <button
            type= "submit"
            name = {this.state.answers[3]}
            onClick = {this.checkAnswer}>
          {this.state.answers[3]}
        </button>
     </form>

      </div>
    );
  }
}

export default App;