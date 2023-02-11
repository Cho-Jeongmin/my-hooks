import React, { useState, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  const sayHello = () => {
    console.log("hello");
  };
  useEffect(sayHello, [aNumber]);
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
