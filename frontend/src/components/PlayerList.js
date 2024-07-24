import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import playerService from '../services/playerService';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    playerService.getPlayers().then(data => setPlayers(data));
  }, []);

  return (
    <div>
      <h1>Basketball Players</h1>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            <Link to={`/player/${player._id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
