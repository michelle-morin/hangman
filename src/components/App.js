import React from 'react';
import Header from './Header';
import GameControl from './GameControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <div style={appStyles}>
      <Header />
      <GameControl />
    </div>
  );
}

export default App;