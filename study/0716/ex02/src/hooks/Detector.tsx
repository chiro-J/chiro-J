import { useEffect, useState } from "react";

export default function Detector() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("count 변경됨:", count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
