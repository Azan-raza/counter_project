import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);


function increase()
{
    setCount(count + 1);
}

function decrease(){
    setCount(count - 1);
}

function reset(){
    setCount(0);
}

let message;

    if(count > 10){
        message = <h3 id="msg">High value</h3>
    }
    else if (count < 0){
            message = <h3 id="msg">Negative value</h3>
    }
    else{
        message = <h3 id="msg">Normal value</h3>
    }
return (
    <div>
            <h2 id="msg">Counter: {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button><br />
            {message}

    </div>

    
)

}


export default Counter
