import { useEffect } from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  const handleCLick = () => {
    let isExpanded = document
      .getElementById("btn-expander")
      .getAttribute("aria-expanded");
    if (isExpanded === "true") {
      document.getElementById("btn-expander").click();
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.addEventListener("click", handleCLick);
      return () => {
        window.removeEventListener("click", handleCLick);
      };
    }
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="img/logo_dessin.png"
            alt="Chloé Deschamps Dessin"
            className="img-responsive"
            id="logo-dessin"
          ></img>
        </a>
        <button
          id="btn-expander"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mx-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                activeClassName="active"
                className={"nav-link mx-2"}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/accompagnement"
                activeClassName="active"
                className={"nav-link mx-2"}
              >
                Accompagnement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/funnypony"
                activeClassName="active"
                className={"nav-link mx-2"}
              >
                Funny-Pony
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/propos"
                activeClassName="active"
                className={"nav-link mx-2"}
              >
                A Propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className={"nav-link mx-2"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
