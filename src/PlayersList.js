import React from 'react';
import Player from './Player';
import { players } from './players';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const PlayersList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Inline styles */}
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};


export default PlayersList;