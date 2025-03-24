import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);  //fn call kore tar para 0 dawa hoyche ar left e 2ta variable declare kora hoyche

    function handleCount() {
        // setCount(5)  //setcount fn er value barano hoyche
        const newCount = count + 1;  // 0 + 1  ... 1+1.....2+1
        setCount(newCount);  //1...2...3
    }

    const counterStyle = {
        border: '2px solid gold',
        borderRadius: '10px',
        margin: '10px',
        padding: '5px',
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleCount} >Add</button>
        </div>
    )
}