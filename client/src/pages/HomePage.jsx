import { useState } from "react";

function HomePage() {

  const [count, setCount] = useState(100);

  function increase() {
    setCount(count + "a");
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>
      <button onClick={reset}>
        reset 
      </button>
    </div>
  );
}

export default HomePage;