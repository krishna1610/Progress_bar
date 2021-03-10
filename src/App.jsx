import "./App.css";
import AppGrid from "./Componets/AppGrid";
import ButtonToggler from "./Componets/ButtonToggler";
import List from "./Componets/List";
import Pagination from "./Componets/Pagination";
import ProgressBar from "./Componets/ProgressBar";

function App() {
  return (
    <div className="container">
      <ProgressBar />
      <Pagination />
      <List />
      <AppGrid />
      <ButtonToggler />
    </div>
  );
}

export default App;
