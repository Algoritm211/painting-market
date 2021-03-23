import React, {useState} from 'react';
import headerLogo from '../../assets/header/logo-museum.png'
import './Header.scss'
import Navigation from "../MainLayout/Navigation/Navigation";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={'header'}>
      <div className={'container'}>
        <Navigation />
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
