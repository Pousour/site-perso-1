import React from "react";

const Parcours = () => {
  return (
    <>
        <div className="monparcours">
          <h1 data-aos="fade-up" data-aos-duration="2000">Mon parcours</h1>
            <ul className="para" data-aos="fade-up" data-aos-duration="2000">
              <li> <i className="fas fa-square-root-alt"></i>Obtention d'un BAC S en 2019 </li>
              <i className="fas fa-angle-right"></i>
              <li> <i className="fas fa-graduation-cap"></i>Entrée en DUT MMI la même année </li>
            </ul>
            <ul className="para" data-aos="fade-up" data-aos-duration="2000">
              <i className="fas fa-angle-right"></i>
              <li> <i className="fas fa-train"></i>Stage de 5 semaines en fin de première année chez Alstom </li>
              <i className="fas fa-angle-right"></i>
              <li> <i className="fas fa-user-graduate"></i>Début de la deuxième année de DUT </li>
            </ul>
            <ul className="para" data-aos="fade-up" data-aos-duration="2000">
              <i className="fas fa-angle-right"></i>
              <li> <i className="fas fa-gamepad"></i>Spécialisation en jeux vidéo </li>
              <i className="fas fa-angle-right"></i>
              <li> <i className="fab fa-font-awesome-flag"></i> Aujourd'hui ... </li>
            </ul>
        </div>
    </>
  );
};

export default Parcours;
