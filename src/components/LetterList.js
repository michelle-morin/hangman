import React from 'react';
import Letter from './Letter';

function LetterList() {

  const masterLetterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  return(
    <React.Fragment>
      {masterLetterList.map((letter) => 
        <Letter currentLetter={letter} />
      )}
    </React.Fragment>
  );
};

export default LetterList;