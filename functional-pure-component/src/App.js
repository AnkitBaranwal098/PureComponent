import "./App.css";
import { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

  const improve = useMemo(() => {
      console.log(`MultiCount method re-rendered for ${count}`);
      return count * 2;
    },
    [count]);

  return (
    <div className="App">
      <h2>Counter is {improve}</h2>
      <h2>Item is {item}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Counter
      </button>
      <button
        onClick={() => {
          setItem(item + 5);
        }}
      >
        Update Item
      </button>
    </div>
  );
}

export default App;
