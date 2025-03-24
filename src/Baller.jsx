import { useState } from "react"
// import Batsman from "./Batsman";
export default function Baller({runs}){
    const [balls , setBalls] = useState(0);
    function handleRightBall(){
        const newBall = balls + 1;
        setBalls(newBall);
    }
    
    function handleWeightBall(){
        runs = runs + 1;
    }

    function handleNoBall(){

    }
    return(
        <div>
            <h2>Baller</h2>
            <h2>Total Ball: {balls}</h2>
            <button onClick={handleRightBall}>Right Ball</button>
            <button onClick={handleWeightBall}>Weight Ball</button>
            <button onClick={handleNoBall}>No Ball</button>
        </div> 
    )
}