import React from 'react';
import Letter from './Letter';
import PropTypes from 'prop-types';

function LetterList(props) {

  const masterLetterList = {
    1: 'a', 
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z'
  };

  const letterStyles = {
    width: '350px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flexStart',
    marginTop: '1%',
    marginBottom: '1%'
  };

  return(
    <React.Fragment>
      <div style={letterStyles}>
        {Object.keys(masterLetterList).map((key) => 
          <Letter currentLetter={masterLetterList[key]} whenLetterClicked={props.onLetterClick} key={key} id={key} />
        )}
      </div>
    </React.Fragment>
  );
};

LetterList.propTypes = {
  onLetterClick: PropTypes.func
}

export default LetterList;