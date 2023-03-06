import React from "react";
import logo from "../images/logo1.png";
import lupa from "../images/icon.png";
import basket from "../images/cart.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="">Каталог</a>
        <a href="">О Нас</a>
        <a href="">Оплата и доставка</a>
        <a href="">Контакты</a>
      </nav>
      <div className="search">
        <input
          className="inp-search"
          type="text"
          placeholder="поиск по каталогу"
        />
        <img className="lupa" src={lupa} alt="" />
      </div>
      <img className="basket" src={basket} alt="" />
      <a className="bascet-a" href="">
        оформить заказ
      </a>
    </div>
  );
};

export default Header;
