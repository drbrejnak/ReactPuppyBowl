import { useState, useEffect } from "react";

const SinglePlayer = () => {

const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

useEffect( ()=> {
    const fetchSinglePlayer = async (playerId) => {
        try {
            const response = await fetch(`${API_URL}/players/${playerId}`);
            const result = await response.json();
            setPlayer(result.data);
        } catch (err) {
            console.error(`Oh no, trouble fetching player #${playerId}!`, err);
        }
    };
    fetchSinglePlayer();
},[])


    const renderSinglePlayer = async (id) => {
      await fetchSinglePlayer(id);
      $form.style.display = "none";
      const player = state.player.player;

      const playerInfo = document.createElement("section");
      playerInfo.classList.add("single-card")
      playerInfo.innerHTML = `
        <img src="${player.imageUrl}" alt="${player.name}"/>
        <h2 class="text">${player.name}</h2>
        <h6 class="text">ID Number: ${player.id}</h6>
        <h4 class="text">${player.breed}</h4>
        <h4 class="text">Status: ${player.status}</h4>
      `;
      const teamName = document.createElement("h4");
      teamName.classList.add("text");
      if (player.team === null) {
        teamName.innerText = "Current Team: Unassigned";
      } else {
        teamName.innerText = `Current Team: ${player.team.name}`;
      }
      playerInfo.appendChild(teamName);
      const returnButton = document.createElement("button");
      returnButton.classList.add("nav-button");
      returnButton.addEventListener("click", () => {
        renderAllPlayers();
        $form.style.display = "flex"
      });
      returnButton.innerText = "Back to All Players";
      playerInfo.appendChild(returnButton);

      $dogList.replaceChildren(playerInfo);
    };

}
export default SinglePlayer