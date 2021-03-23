import React from 'react';
import Navigation from "../MainLayout/Navigation/Navigation";
import './Footer.scss'

const Footer:React.FC = () => {
  return (
    <div className={'footer'}>
      <div className={'container'}>
        <Navigation />
        <div className="footer__contacts">
          <div className={'footer__contacts-contact'}>
            <i className="fas fa-phone-alt" />
            +7 (495) 555-55-55
          </div>
          <div className={'footer__contacts-contact'}>
            <i className="fas fa-map-marker-alt" />
              г. Москва, ул. Расплетина, 24
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
