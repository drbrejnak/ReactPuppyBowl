// import Index from "../API/Index";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAllPlayers } from "../API/Index";

const AllPlayers = () => {

const navigate = useNavigate();

const [singlePlayer, setSinglePlayer] = useState(null);
const [dogs, setDogs] = useState([]);

useEffect(() => {
    const loadData = async () => {
        const result = await fetchAllPlayers();
        setDogs(result)
    };
    loadData();
},[]);
console.log(dogs)

return(
    <main>
    {
        dogs.map((player)=>{
            return(
                <section key={player.id}>
                    <img src={player.imageUrl} alt={player.name} />
                    <h2 className="text">{player.name}</h2>
                    <h6 className="text">ID Number: {player.id}</h6>
                    <button className="nav-button" onClick={() => {
                        setSinglePlayer(player.id)
                        }}>See Details</button>
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