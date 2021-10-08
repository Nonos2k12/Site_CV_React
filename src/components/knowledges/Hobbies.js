import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span>Histoire</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Astronomie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-futbol"></i>
          <span>Football</span>
        </li>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Basket-Ball</span>
        </li>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Jeux-vidéos</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
