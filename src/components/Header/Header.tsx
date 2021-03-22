import React, {useState} from 'react';
import headerLogo from '../../assets/header/logo-museum.png'
import './Header.scss'

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={'header'}>
      <div className={'container'}>
        <div className={'header__menu'}>
          <div className="header__menu-img">
            <img src={headerLogo} alt="headerLogo"/>
          </div>
          <nav className={'header__menu-buttons'}>
            <a href="#">Каталог</a>
            <a href="#">Доставка</a>
            <a href="#">Оплата</a>
            <a href="#">Контакты</a>
            <a href="#">О галерее</a>
          </nav>
        </div>
        <div className="header__search">
          <input
            className={'header__search-input'}
            placeholder={'Поиск по названию картины'}
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
          <button className={'header__search-button'}>Найти</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
