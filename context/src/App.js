import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <ThemeContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
