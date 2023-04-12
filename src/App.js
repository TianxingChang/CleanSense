import "./styles/App.css";
import CardZone from "./components/CardZone";
import Topbar from "./components/TopBar";
import Infobar from "./components/InfoBar";
import Logo from "./assets/images/isd.png";

function App() {
  return (
    <div className="App">
      <Topbar />
      <h1 className="title"> Toilets Status: </h1>
      <Infobar />
      <CardZone />

      <footer>
        <a
          href="https://hkust.edu.hk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Logo} className="logo" alt="Logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
