import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { images } from './HangmanImages';
import LetterList from './LetterList.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

function Hangman(props) {

  useEffect(() => {
    console.log("in use effect");
    guessedWord();
  });

  const { dispatch } = props;

  function guessedWord(){
    return props.answer.split("").map(letter => (props.guessed.has(letter) ? letter : " _ "));
  };

  const handleGuess = (letter) => {
    const actionOne = a.addGuess(letter);
    dispatch(actionOne);
    const actionTwo = props.answer.includes(letter) ? a.addMistake(0) : a.addMistake(1);
    dispatch(actionTwo);
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

  const isWinner = guessedWord().join("") === props.answer;
  const gameOverLost = (props.mistake >= 6);
  const gameOver = gameOverLost || isWinner;

  let gameStatus;
  if (isWinner) {
    gameStatus = "You won!"
  }
  if (gameOverLost) {
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
          <p>{!gameOver ? guessedWord() : props.answer}</p>
          {!gameOver ? <LetterList onLetterClick={handleGuess} /> : <p>GAME OVER</p>}
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