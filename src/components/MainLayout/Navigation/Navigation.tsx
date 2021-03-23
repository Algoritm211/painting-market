import React from 'react';
import headerLogo from "../../../assets/header/logo-museum.png";
import './Navigation.scss'

const Navigation: React.FC = () => {
  return (
    <div className={'navigation'}>
      <div className="navigation__img">
        <img src={headerLogo} alt="navigationLogo"/>
      </div>
      <nav className={'navigation__menu'}>
        <a href="#">Каталог</a>
        <a href="#">Доставка</a>
        <a href="#">Оплата</a>
        <a href="#">Контакты</a>
        <a href="#">О галерее</a>
      </nav>
    </div>
  );
};

export default Navigation;
