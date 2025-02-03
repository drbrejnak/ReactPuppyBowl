import { useState } from "react";
import AllPlayers from "./AllPlayers";
import { fetchAllPlayers, fetchSinglePlayer } from "../API/Index";

const cohortName = "2410-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const NewPlayerForm = () => {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [teamId, setTeamId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/players`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    breed: breed,
                    status: status,
                    imageUrl: imageUrl,
                    teamId: parseInt(teamId)
                })
            })

            const data = await response.json()
            console.log(data)
            if(data.success === false){
                throw new Error(data.message || "unknown error in response")
            }
            return data

        } catch (e) {
            console.log('Failed to sign up!')
            console.error(e)
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    />
                </label>
                <label>
                    Breed
                    <input
                    name="breed"
                    placeholder="Breed"
                    onChange={(e) => setBreed(e.target.value)}
                    value={breed}
                    required
                    />
                </label>
                <label>
                    Status
                    <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    required
                    >
                        <option value="" disabled>Current Status</option>
                        <option value="field">Field</option>
                        <option value="bench">Bench</option>
                    </select>
                </label>
                <label>
                    Image URL
                    <input
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    required
                    />
                </label>
                <label>
                    Team ID
                    <select
                    name="teamId"
                    onChange={(e) => setTeamId(e.target.value)}
                    value={teamId}
                    required
                    >
                        <option value="" disabled>Team Select</option>
                        <option value="2624">Ruff</option>
                    </select>
                </label>
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
    )
}

export default NewPlayerForm