import React, {useState} from 'react';
import './Header.scss'
import Navigation from "../MainLayout/Navigation/Navigation";
import {observer} from "mobx-react-lite";
import PaintingsStore from '../../store/paintingsStore'

const Header: React.FC = () => {
  const {setSearchString} = PaintingsStore
  const [searchValue, setSearchValue] = useState('')
  const [searchTimeout, setSearchTimeout] = useState<false | ReturnType<typeof setTimeout>>(false)

  const onChangeSearch = (searchStr: string) => {
    setSearchValue(searchStr)

    if (searchTimeout !== false) {
      clearInterval(searchTimeout)
    }

    setSearchTimeout(
      setTimeout(() => {
      setSearchString(searchStr)
    }, 700))

  }

  return (
    <div className={'header'}>
      <div className={'container'}>
        <Navigation />
        <div className="header__search">
          <input
            className={'header__search-input'}
            placeholder={'Поиск по названию картины'}
            value={searchValue}
            onChange={event => onChangeSearch(event.target.value)}
          />
          <button className={'header__search-button'}>Найти</button>
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
