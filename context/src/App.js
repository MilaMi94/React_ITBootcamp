import "./App.css";
import SongList from "./components/SongList";
import ThemeToggle from "./components/ThemeToggle";
import SongContextProvider from "./context/SongContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <ThemeContextProvider>
        <ThemeToggle />

        <SongContextProvider>
          <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
