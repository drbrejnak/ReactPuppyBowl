import { useState, useEffect } from "react";

const Index = () => {

const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const [dogs, setDogs] = useState([]);
// const [player, setPlayer] = useState(null);

useEffect(() => {
    const fetchAllPlayers = async () => {
        try {
            const response = await fetch(`${API_URL}/players`);
            const result = await response.json();
            setDogs(result.data);
        } catch (err) {
            console.error("Uh oh, trouble fetching players!", err);
        }
    };
    fetchAllPlayers();
},[]);
console.log(dogs)

// useEffect(() => {
//     const fetchSinglePlayer = async (playerId) => {
//         try {
//             const response = await fetch(`${API_URL}/players/${playerId}`);
//             const result = await response.json();
//             setPlayer(result.data);
//         } catch (err) {
//             console.error(`Oh no, trouble fetching player #${playerId}!`, err);
//         }
//     };
//     fetchSinglePlayer();
// },[]);

}

export default Index