import { useEffect, useState } from "react"

export default function Players() {
    const [players, setPlayers] = useState([]);
    // console.log(players)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setPlayers(data));
    }, []);

    return (
        <div>
            <h2>Players : {players.length} </h2>
            <ol>
            {players.map(player => <li key={player.id}>Player Name : {player.name}</li>)}
            </ol>
        </div>
    )
}