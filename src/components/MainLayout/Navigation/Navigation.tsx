import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../../assets/header/logo-museum.png";
import './Navigation.scss'

const Navigation: React.FC = () => {
  return (
    <div className={'navigation'}>
      <div className="navigation__img">
        <img src={headerLogo} alt="navigationLogo"/>
      </div>
      <nav className={'navigation__menu'}>
        <Link to={'/catalog'}>Каталог</Link>
        <Link to={'/delivery'}>Доставка</Link>
        <Link to={'/payments'}>Оплата</Link>
        <Link to={'/contacts'}>Контакты</Link>
        <Link to={'/about'}>О галерее</Link>
      </nav>
    </div>
  );
};

export default Navigation;
