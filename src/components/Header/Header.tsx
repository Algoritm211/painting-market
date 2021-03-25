import React, {useState} from 'react';
import './Header.scss'
import Navigation from "../MainLayout/Navigation/Navigation";
import {observer} from "mobx-react-lite";
import PaintingsStore from '../../store/paintingsStore'
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const {setSearchString} = PaintingsStore
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')
  const [searchTimeout, setSearchTimeout] = useState<false | ReturnType<typeof setTimeout>>(false)

  //TODO: finish work with search
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

  const onSearch = () => {
    history.push('/catalog')
    setSearchString(searchValue)
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
            onKeyPress={(event) => event.key === 'Enter' && onSearch()}
            onChange={event => onChangeSearch(event.target.value)}
          />
          <button className={'header__search-button'} onClick={onSearch}>Найти</button>
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
