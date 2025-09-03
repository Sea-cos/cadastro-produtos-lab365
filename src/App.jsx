import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Listagem from "./pages/Listagem/Listagem"
import Navbar from "./Components/Navbar/Navbar" 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/cadastro" />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/listagem" element={<Listagem/>} />
        </Routes>
    </>
  );
}

export default App;
