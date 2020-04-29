import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Letter(props){
  const buttonStyles = {
    margin: '2px'
  };

  return (
    <React.Fragment>
      <Button style={buttonStyles} onClick={()=> props.whenLetterClicked(props.currentLetter)} variant="outline-secondary">{props.currentLetter}</Button>
    </React.Fragment>
  );
}

Letter.propTypes = {
  currentLetter: PropTypes.string,
  id: PropTypes.string,
  whenLetterClicked: PropTypes.func
}

export default Letter;