import React from "react";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion";

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0,
    scale: 0.8
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
}

const Navigation = () => {
  return (
    <>
      <motion.div className="navigation" id="navbar" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}> 
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
      </motion.div>
    </>
  );
};

export default Navigation;
