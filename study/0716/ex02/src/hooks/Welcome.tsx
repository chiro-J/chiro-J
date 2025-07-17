import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert("환영합니다!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <p>3초 후 알림이 표시됩니다.</p>;
}
