import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>Développeur Front-End (stage) - Rendr</h4>
        <h5>Mars-Avril 2021</h5>
        <ul>
          <li>
            Maintenance et mise à jour de "mini-jeux" présents sur l’application
            Legendr.
          </li>
          <li>
            Création d’un nouveau jeu "from scratch" en Javascript avec
            utilisation de Bootstrap et jQuery.
          </li>
        </ul>
      </div>
      <div className="exp-2">
        <h4>Gestionnaire relations abonnés - Caloga</h4>
        <h5>2015 - 2019</h5>
        <ul>
          <li>Gestion d’une base de données d’abonnés.</li>
          <li>
            Reporting sur l’évolution de nos bases et la mise en place de
            solutions permettant la pérennité de celles-ci.
          </li>
        </ul>
      </div>
      <div className="exp-3">
        <h4>Equipier polyvalent - Mc-Donald's</h4>
        <h5>2010 - 2013</h5>
        <ul>
          <li>Préparation des commandes.</li>
          <li>Accueil et service des clients.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
