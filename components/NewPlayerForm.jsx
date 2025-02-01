import { useState } from "react";

const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const NewPlayerForm = () => {

    const[values, setValues] = useState({
        name: '',
        breed: '',
        status: '',
        imageUrl: '',
        teamId: ''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`${API_URL}/players`, {
              method: "POST",
              body: JSON.stringify(values),
            });
            console.log(result)
          } catch (err) {
            console.error("Oops, something went wrong with adding that player!", err);
          }
    }

    return (
            <form id="new-player-form" method="post" onSubmit={handleSubmit}>
                <p><strong>Join Now!</strong></p>
                <label>
                    Name
                    <input
                    name="name"
                    placeholder="Name"
                    onChange={(e) => handleChanges(e)}
                    />
                </label>
                <label>
                    Breed
                    <input
                    name="breed"
                    placeholder="Breed"
                    onChange={(e) => handleChanges(e)}
                    />
                </label>
                <label>
                    Status
                    <select
                    defaultValue="option1"
                    name="status"
                    onChange={(e) => handleChanges(e)}
                    >
                        <option value="option1" disabled>Current Status</option>
                        <option value="field">Field</option>
                        <option value="bench">Bench</option>
                    </select>
                </label>
                <label>
                    Image URL
                    <input
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={(e) => handleChanges(e)}
                    />
                </label>
                <label>
                    Team ID
                    <select
                    defaultValue="option1"
                    name="teamId"
                    onChange={(e) => handleChanges(e)}
                    >
                        <option value="option1" disabled>Team Select</option>
                        <option value="2624">Ruff</option>
                    </select>
                </label>
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
    )
}

export default NewPlayerForm

// const form = document.getElementById("new-player-form");
//     form.innerHTML = `
//       <p><strong>Join Now!</strong></p>
//       <input id="name" name="name" placeholder="Name"></input>
//       <input id="breed" name="breed" placeholder="Breed"></input>
//       <select id="status" name="status">
//         <option value="" disabled selected>Current Status</option>
//         <option value="field">Field</option>
//         <option value="bench">Bench</option>
//       </select>
//       <input id="imageUrl" name="imageUrl" placeholder="Image URL"></input>
//       <select id="teamId" name="teamId">
//         <option value="" disabled selected>Team Select</option>
//         <option value="2624">Ruff</option>
//       </select>
//     `;
//     const addButton = document.createElement("button");
//     addButton.type = "submit";
//     addButton.classList.add("submit-button");
//     addButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       addNewPlayer();
//     });
//     addButton.innerText = "Sign up";
//     form.appendChild(addButton);

//     const players = fetchAllPlayers();