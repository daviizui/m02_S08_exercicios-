import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Invest from "./components/Invest/Invest";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header className="app-header">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu futuro</p>
      </header>
      <NavBar />
      <AboutUs />
      <Invest />
    </>
  );
}

export default App;
