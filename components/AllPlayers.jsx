import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../API/Index";

const AllPlayers = ({data, onDataChange}) => {

    const navigate = useNavigate();

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchAllPlayers();
            setDogs(result)
        };
        loadData();
    }),[];

    if(!dogs.length){
        return(
            <p className="no-info-text">No players currently registered! Please check back later!</p>
        )
    }

    return(
        <main>
        {
            dogs.map((player)=>{
                if(data === ""){
                    return(
                        <section key={player.id}>
                            <img src={player.imageUrl} alt={player.name} />
                            <h2 className="text">{player.name}</h2>
                            <h6 className="text">ID Number: {player.id}</h6>
                            <button className="nav-button" onClick={() => {
                                navigate(`/player/${player.id}`)
                                onDataChange("")
                                }}>See Details
                            </button>
                        </section>
                    )
                } else if(player.name.toLowerCase().includes(data.toLowerCase())){
                    return(
                        <section key={player.id}>
                            <img src={player.imageUrl} alt={player.name} />
                            <h2 className="text">{player.name}</h2>
                            <h6 className="text">ID Number: {player.id}</h6>
                            <button className="nav-button" onClick={() => {
                                navigate(`/player/${player.id}`)
                                onDataChange("")
                                }}>See Details
                            </button>
                        </section>
                    )
                }
            })
        }
        </main>
    )
}

export default AllPlayers