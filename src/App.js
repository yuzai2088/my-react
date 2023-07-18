import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./store/slice";

function App() {
  const { num } = useSelector((state) => state.addSlice);
  const dispatch = useDispatch();

  console.log("初始化", num);
  const handleClick = () => {
    console.log("点击率");
    dispatch(add(8));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {num}
        </a>
      </header>
    </div>
  );
}

export default App;
