import React, { Component } from 'react';
import { randomWord } from './WordList.js';
import { Button, Container } from 'react-bootstrap';
import LetterList from './LetterList.js';
// import step0 from '../img/0.jpg';
// import step1 from '../img/1.jpg';
// import step2 from '../img/2.jpg';
// import step3 from '../img/3.jpg';
// import step4 from '../img/4.jpg';
// import step5 from '../img/5.jpg';
// import step6 from '../img/6.jpg';

class Hangman extends Component {

  static defaultProps = {
    maxWrongGuesses: 6,
    // images: [step0, step1, step2, step3, step4, step5, step6]
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  };

  guessedWord(){
    // display either letter if the letter was guessed, or display underscore.
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  handleGuess = (value) => {
    let letter = value;
    this.setState(state => ({
      guessed: state.guessed.add(letter),
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
    }));
  }

  resetGame = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const hangmanStyles = {
      marginTop: '2%'
    }

    const gameOver = this.state.mistake >= this.props.maxWrongGuesses;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStatus;
    if (isWinner) {
      gameStatus = "You won!"
    }
    if (gameOver) {
      gameStatus = "You lose!"
    }

    return (
      <React.Fragment>
        <Container style={hangmanStyles}>
          <p>incorrect guesses: {this.state.mistake} of {this.props.maxWrongGuesses}</p>
          {/* <img src={this.props.images[this.state.mistake]} alt="current state of hangman"></img> */}
          <p>Guess the word:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <LetterList onLetterClick={this.handleGuess} />
          {gameStatus}
          <Button variant="outline-info" onClick={this.resetGame}>Restart game</Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default Hangman;