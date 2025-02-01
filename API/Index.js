const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result.data.players
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};