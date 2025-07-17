import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-10">
      <p className="text-xl">현재 카운트: {count}</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setCount(count + 1)}
      >
        +1 증가
      </button>
    </div>
  );
}
