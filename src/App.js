import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        style={{
          fontSize: "20px",
          cursor: "pointer",
          margin: "10px",
          padding: "10px 30px",
          borderRadius: "5px",
          border: "1px solid blue",
          backgroundColor: "#24A0ED"
        }}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h2>{count}</h2>
      <button
        style={{
          fontSize: "20px",
          cursor: "pointer",
          margin: "10px",
          padding: "10px 25px",
          borderRadius: "5px",
          border: "1px solid blue",
          backgroundColor: "#24A0ED"
        }}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>{" "}
    </div>
  );
}
