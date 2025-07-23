import React from "react";
import { useCounterStore } from "../store/useCounterStore";

const Counter: React.FC = () => {
    const value = useCounterStore((state) => state.value);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div>
            <h2>Counter: {value}</h2>
            <button className="ml-4" onClick={increment}> [+ 1] </button>
            <button className="ml-4" onClick={decrement}> [- 1] </button>
            <button className="ml-4" onClick={() => incrementByAmount(5)}> [+ 5] </button>
            <button className="ml-4" onClick={reset}> [Reset] </button>
        </div>
    )
}


export default Counter;