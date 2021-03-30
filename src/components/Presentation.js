import React from "react";

const Presentation = () => {
  return (
    <>
      <img src="././media/bg.jpg" alt="bg" id="bg"></img>
      <div className="presentation">
        <div className="apropos">
          <p className="para" data-aos="fade-up" data-aos-duration="2000">
            Bonjour, j'ai 19 ans et je suis étudiant en MMI à l'IUT de Nancy. Je
            suis actuellement en recherche de stage pour la fin de ma deuxième
            année d'études.
          </p>
          <img
            src="./media/moi.jpg"
            alt="moi"
            id="moi"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Presentation;

// <img src="././media/bg.jpg" alt="bg" id="bg"></img>
