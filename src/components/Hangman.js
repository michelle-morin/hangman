import React from 'react';
import { Button, Container } from 'react-bootstrap';
import LetterList from './LetterList.js';
import PropTypes from 'prop-types';
import step0 from '../img/0.png';
import step1 from '../img/1.png';
import step2 from '../img/2.png';
import step3 from '../img/3.png';
import step4 from '../img/4.png';
import step5 from '../img/5.png';
import step6 from '../img/6.png';
import { connect } from 'react-redux';
import * as a from './../actions';

function Hangman(props) {

  const { dispatch } = props;

  const images = [step0, step1, step2, step3, step4, step5, step6];

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