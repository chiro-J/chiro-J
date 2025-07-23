import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { increment, decrement, incrementByAmount, reset } from "../store/slices/counterSlice";


const Counter: React.FC = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="ml-4" onClick={() => dispatch(increment())}> [+ 1] </button>
            <button className="ml-4" onClick={() => dispatch(decrement())}> [- 1] </button>
            <button className="ml-4" onClick={() => dispatch(incrementByAmount(5))}> [+ 5] </button>
            <button className="ml-4" onClick={() => dispatch(reset())}> [Reset] </button>
        </div>
    )
}

export default Counter;

