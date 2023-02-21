import "./App.css";
//import Counter1 from "./components/Counter1";
import Select from "./components/Select";
import SongList from "./components/SongList";

function App() {
  //const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Select /> */}
      {/* <Counter />
      {show ? <Counter1 /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      <SongList />
    </div>
  );
}

export default App;
