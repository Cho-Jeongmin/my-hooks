import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

function App() {
  const begForLife = () => {
    console.log("Please don't leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
