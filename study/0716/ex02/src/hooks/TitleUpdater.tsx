import { useState, useEffect } from "react";

export default function TitleUpdater() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name ? `${name}님 환영합니다!` : "React App";
  }, [name]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="input input-bordered"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
    </div>
  );
}
