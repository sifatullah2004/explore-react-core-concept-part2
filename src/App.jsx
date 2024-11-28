import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concept Part-2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert("button 2 clicked");
        }}
      >

        Button 2
      </button>
      {/* Vajalla  */}
      <button onClick={() => addToFive(3)}>Three</button>
    </>
  );
}

export default App;
