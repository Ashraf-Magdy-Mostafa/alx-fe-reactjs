import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "15px" }}>
        Current Count: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
