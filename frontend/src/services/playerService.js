const API_URL = 'http://localhost:5000/api/players';

const getPlayers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const getPlayer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getPlayers,
  getPlayer
};
