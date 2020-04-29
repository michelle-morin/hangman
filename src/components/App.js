import React from 'react';
import Header from './Header';
import Hangman from './Hangman';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <div style={appStyles}>
      <Header />
      <Hangman />
    </div>
  );
}

export default App;