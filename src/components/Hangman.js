import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { images } from './HangmanImages';
import LetterList from './LetterList.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

function Hangman(props) {

  const { dispatch } = props;

  function guessedWord(){
    // display either letter if the letter was guessed, or display underscore.
    return props.answer.split("").map(letter => (props.guessed.has(letter) ? letter : " _ "));
  }

  const handleGuess = (value) => {
    const action = a.addGuess(value);
    dispatch(action);
    if (props.answer.includes(value) === false) {
      const actionTwo = a.addMistake();
      dispatch(actionTwo);
    }
  };

  const resetGame = () => {
    const action = a.resetMistakes();
    dispatch(action);
    const actionTwo = a.resetGuesses();
    dispatch(actionTwo);
    const actionThree = a.setAnswer();
    dispatch(actionThree);
  }

  const hangmanStyles = {
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  const gameOver = props.mistake >= 6;
  const isWinner = guessedWord().join("") === props.answer;

  let gameStatus;
  if (isWinner) {
    gameStatus = "You won!"
  }
  if (gameOver) {
    gameStatus = "You lost!"
  }

  const imgStyles = {
    height: '75vh',
    width: 'auto'
  }

  const winStyles = {
    color: '#17a2b8',
    fontSize: '3em'
  }

  return (
    <React.Fragment>
      <Container style={hangmanStyles}>
        <div>
          <img style={imgStyles} src={images[props.mistake]} alt="current state of hangman"></img>
        </div>
        <div>
          <p>incorrect guesses: {props.mistake} of 6</p>
          <p>Guess the word:</p>
          <p>
            {!gameOver ? guessedWord() : props.answer}
          </p>
          <LetterList onLetterClick={handleGuess} />
          <p style={winStyles}>{gameStatus}</p>
          <Button variant="outline-info" onClick={resetGame}>Restart game</Button>
        </div>
      </Container>
    </React.Fragment>
  );
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