import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [fours, setFours] = useState(0)
    const [sixes, setSixes] = useState(0);

    function handleSingle() {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }

    function handleFour() {
        const newRuns = runs + 4;
        const four = fours + 1;
        setFours(four)
        setRuns(newRuns);
    }

    function handleSix() {
        const newRuns = runs + 6;
        const countSixes = sixes + 1;
        setSixes(countSixes);
        setRuns(newRuns);
    }

    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);
    function handleRightBall() {
        const newBall = balls + 1;
        if (newBall === 6) {
            const over = overs + 1;
            setOvers(over);
            setBalls(0);
        }
        else {
            setBalls(newBall);
        }
    }

    function handleWeightBall() {
        const newRuns = runs + 1;
        setRuns(newRuns)
    }

    function handleNoBall() {
        const newRuns = runs + 1;
        setRuns(newRuns)
    }

    return (
        <div>
            {
                runs >= 50 && <h3> Your score : 50</h3>
            }
            <h1>Score: {runs} </h1>
            <p>Six: {sixes}  </p> 
            <p>  Four: {fours}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

            <div>
                {
                    balls === 0 && overs >0 && <h2>Your over is done</h2>
                }
                <h2>Overs: {overs}.{balls}</h2>
                <button onClick={handleRightBall}>Right Ball</button>
                <button onClick={handleWeightBall}>Weight Ball</button>
                <button onClick={handleNoBall}>No Ball</button>
            </div>
        </div>
    )
}