import React from 'react';
import './App.css';

import SpaceXLogo from './SpaceXLogo.png';

function App() {
  return (
    <div className="App">
      <img
        src={SpaceXLogo}
        alt="SpaceX"
        style={{
          width: 300,
          display: 'block',
          margin: 'auto'
        }}
      />
    </div>
  );
}

export default App;
