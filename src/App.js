import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'Gray', height: '100vh'}}>
      <PlayersList />
    </div>
  );
}

export default App;