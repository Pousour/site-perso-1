import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation" id="navbar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas"></i>
              <span className="noir">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas"></i>
              <span className="noir">Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas"></i>
              <span className="noir">Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas"></i>
              <span className="noir">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
