import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((current) => current + 1);
  const decrement = () => setCount((current) => current - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
