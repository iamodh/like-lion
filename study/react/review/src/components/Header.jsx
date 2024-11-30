import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul className="nav">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? "menu-active" : "menu")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "menu-active" : "menu")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="list"
              className={({ isActive }) => (isActive ? "menu-active" : "menu")}
            >
              List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
