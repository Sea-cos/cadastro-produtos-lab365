import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Gerenciamento de produtos</h1>
      <div className="nav-buttons">
        <Link
          to="/cadastro"
          className={location.pathname === "/cadastro" ? "active" : ""}
        >
          Cadastro
        </Link>
        <Link
          to="/listagem"
          className={location.pathname === "/listagem" ? "active" : ""}
        >
          Listagem
        </Link>
      </div>
    </nav>
  );
}
