// import Index from "../API/Index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {

const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const [dogs, setDogs] = useState([]);
// const [player, setPlayer] = useState(null);

useEffect(() => {
    const fetchAllPlayers = async () => {
        try {
            const response = await fetch(`${API_URL}/players`);
            const result = await response.json();
            setDogs(result.data.players);
        } catch (err) {
            console.error("Uh oh, trouble fetching players!", err);
        }
    };
    fetchAllPlayers();
},[]);
console.log(dogs)
console.log(dogs.players)

return(
    <main>
    {
        dogs.map((player)=>{
            return(
                <section>
                    <img src={player.imageUrl} alt={player.name} />
                    <h2 className="text">{player.name}</h2>
                    <h6 className="text">ID Number: {player.id}</h6>
                    <button className="nav-button" onClick={() => navigate()}>See Details</button>
                    <button className="nav-button">Remove Player</button>
                </section>
                )
        })
    }
    </main>
)

//  $form.hidden = false;
//   const dogs = state.dogs.players;

//   if (!dogs.length) {
//     $dogList.innerHTML = `<p class="no-info-text">No player information available!</p>`;
//     return;
//   }

//   const dogList = dogs.map((dog) => {
//     const dogInfo = document.createElement("section");
//     dogInfo.innerHTML = `
//          <img src="${dog.imageUrl}" alt="${dog.name}"/>
//          <h2 class="text">${dog.name}</h2>
//          <h6 class="text">ID Number: ${dog.id}</h6>
//        `;
//     const detailsButton = document.createElement("button");
//     detailsButton.classList.add("nav-button");
//     detailsButton.addEventListener("click", () => renderSinglePlayer(dog.id));
//     detailsButton.innerText = "See Details";
//     dogInfo.appendChild(detailsButton);
//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("nav-button");
//     deleteButton.addEventListener("click", () => {
//       removePlayer(dog.id);
//     });
//     deleteButton.innerText = "Remove From Roster";
//     dogInfo.appendChild(deleteButton);
//     return dogInfo;
//   });

//   $dogList.replaceChildren(...dogList);

}

export default AllPlayers