import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { images } from './HangmanImages';
import LetterList from './LetterList.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctGuesses: 0
    }
  }
  
  guessedWord(){
    return this.props.answer.split("").map(letter => (this.props.guessed.has(letter) ? letter : " _ "));
  };

  handleGuess = (letter) => {
    const { dispatch } = this.props;
    const actionOne = a.addGuess(letter);
    dispatch(actionOne);
    const actionTwo = this.props.answer.includes(letter) ? a.addMistake(0) : a.addMistake(1);
    dispatch(actionTwo);
    if (this.props.answer.includes(letter)) {
      const updatedCount = this.state.correctGuesses + 1;
      this.setState({correctGuesses: updatedCount});
    }
  };

  resetGame = () => {
    const { dispatch } = this.props;
    const action = a.resetMistakes();
    dispatch(action);
    const actionTwo = a.resetGuesses();
    dispatch(actionTwo);
    const actionThree = a.setAnswer();
    dispatch(actionThree);
  }

  render(){
    const isWinner = this.guessedWord().join("") === this.props.answer;

    const gameOverLost = this.props.mistake >= 6;

    const gameOver = isWinner || gameOverLost;

    let gameStatus;
    if (isWinner) {
      gameStatus = "You won!";
    }
    if (gameOverLost) {
      gameStatus = "You lost!";
    }

    const imgStyles = {
      height: '75vh',
      width: 'auto'
    };
    const winStyles = {
      color: '#17a2b8',
      fontSize: '3em'
    };
    const hangmanStyles = {
      marginTop: '2%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    };

    return (
      <React.Fragment>
        <Container style={hangmanStyles}>
          <div>
            <img style={imgStyles} src={images[this.props.mistake]} alt="current state of hangman"></img>
          </div>
          <div>
            <p>incorrect guesses: {this.props.mistake} of 6</p>
            <p>Guess the word:</p>
            <p>{!gameOver ? this.guessedWord() : this.props.answer}</p>
            {!gameOver ? <LetterList onLetterClick={this.handleGuess} /> : <p>GAME OVER</p>}
            <p style={winStyles}>{gameStatus}</p>
            <Button variant="outline-info" onClick={this.resetGame}>Restart game</Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

Hangman.propTypes = {
  guessed: PropTypes.object,
  mistake: PropTypes.number,
  answer: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    guessed: state.guessed,
    mistake: state.mistake,
    answer: state.answer
  }
};

Hangman = connect(mapStateToProps)(Hangman);

export default Hangman;