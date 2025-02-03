import { useState, useEffect } from "react";
import { fetchSinglePlayer, removePlayer } from "../API/Index";
import { Link, useParams } from "react-router-dom";

const SinglePlayer = () => {

  const [singlePlayer, setSinglePlayer] = useState(null);

  const params = useParams()
  const playerId = params.id
  console.log(playerId)

  useEffect(() => {
      const loadData = async (id) => {
          const result = await fetchSinglePlayer(id);
          setSinglePlayer(result)
      };
      loadData(playerId);
  },[playerId]);
  console.log(singlePlayer)

  if(!singlePlayer) {
    return
  }

  return (
    <>
      <section className="single-card">
        <img src={singlePlayer.imageUrl} alt={singlePlayer.name}/>
        <h2 className="text">{singlePlayer.name}</h2>
        <h6 className="text">ID Number: {singlePlayer.id}</h6>
        <h4 className="text">{singlePlayer.breed}</h4>
        <h4 className="text">Status: {singlePlayer.status}</h4>
        <h4 className="text">{
          singlePlayer.team === null ? "Current Team: Unassigned" : `Current Team: ${singlePlayer.team.name}`
          }
        </h4>
        <Link className="nav-button" to='/'>Home</Link>
        <Link className="nav-button" to='/' onClick={() => removePlayer(playerId)}>Remove Player</Link>
      </section>
    </>
  )

}
export default SinglePlayer