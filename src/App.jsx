import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer props="¡Bienvenido a Esk-Bio, tu tienda de bebidas por delivery!" />
    </>
  );
}

export default App;
