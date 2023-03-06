import React from "react";
import logo from "../images/logofooter.png";
import telega from "../images/telegram.png";
import insta from "../images/instalogo.png";
import wots from "../images/wa.png";

const Footer = () => {
  return (
    <footer>
      <div className="first">
        <img className="footLogo" src={logo} alt="" />
      </div>
      <div>
        <ul className="secondList">
          <li className="catal">Каталог</li>
          <li>О Нас</li>
          <li>Оплата и доставка</li>
          <li>Политика конфидинциальности</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="lastList">
        <p>Следите за нами в соц сетях:</p>
        <img className="telega" src={telega} alt="" />
        <img className="insta" src={insta} alt="" />
        <img className="wots" src={wots} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
