import React from 'react';
import { Link } from 'react-router-dom';

const Delivery:React.FC = () => {
  return (
    <div className={'_temp'}>
      <h1>Секция "Доставка" находится в разработке</h1>
      <Link to={'/catalog'}>
        <button className={'_tempBtn'}>Вернуться на главную страницу</button>
      </Link>
    </div>
  );
};

export default Delivery;
