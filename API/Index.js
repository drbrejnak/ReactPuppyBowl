export const fetchAllPlayers = async () => {
    const cohortName = "2410-FTB-ET-WEB-PT";
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result.data.players
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
};
