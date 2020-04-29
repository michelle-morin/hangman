import React from 'react';
import { Button } from 'react-bootstrap';

function Letter(props){
  return (
    <React.Fragment>
      <Button variant="outline-secondary">{props.currentLetter}</Button>
    </React.Fragment>
  )
}

export default Letter;