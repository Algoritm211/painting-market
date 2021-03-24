import React from 'react';
import {Link} from "react-router-dom";

const About:React.FC = () => {
  return (
    <div className={'_temp'}>
      <h1>Секция "О нас" находится в разработке</h1>
      <Link to={'/catalog'}>
        <button className={'_tempBtn'}>Вернуться на главную страницу</button>
      </Link>
      <Link to={'/contacts'}>
        <button className={'_tempBtn'}>Перейти к контактам</button>
      </Link>
    </div>
  );
};

export default About;
