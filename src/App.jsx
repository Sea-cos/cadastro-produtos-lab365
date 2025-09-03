import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
