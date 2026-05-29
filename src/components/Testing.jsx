import { useState, React } from 'react';
const Testing = () => {
    const [counter, setState] = useState(0)

    function handleClick() {
        setState(counter + 1)
        console.log("Clicked");
        return
    }
    return (

        <div>
            <h1>Counter</h1>
            <button onClick={handleClick}>Click Me</button>
            <h2>{counter}</h2>

        </div>
    )
}


export default Testing


