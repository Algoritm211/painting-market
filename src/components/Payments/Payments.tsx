import React from 'react';
import {Link} from "react-router-dom";

const Payments:React.FC = () => {
  return (
    <div className={'_temp'}>
      <h1>Секция "Оплата" находится в разработке</h1>
      <Link to={'/catalog'}>
        <button className={'_tempBtn'}>Вернуться на главную страницу</button>
      </Link>
    </div>
  );
};

export default Payments;
