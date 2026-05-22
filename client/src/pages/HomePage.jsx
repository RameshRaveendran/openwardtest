import { useState } from "react";
import Button from "../components/Button";

function HomePage() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
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