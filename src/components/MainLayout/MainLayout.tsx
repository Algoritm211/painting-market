import React from 'react';
import Header from '../Header/Header';
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";
import Footer from "../Footer/Footer";
import {Redirect, Route, Switch } from 'react-router-dom';
import Delivery from "../Delivery/Delivery";
import './MainLayout.scss'
import Payments from "../Payments/Payments";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";

const MainLayout = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main className={'content'}>
      <Switch>
        <Route path={'/contacts'} component={Contacts} />
        <Route path={'/about'} component={About} />
        <Route path={'/payments'} component={Payments} />
        <Route path={'/delivery'} component={Delivery} />
        <Route path={'/catalog'} component={PaintingsContainer} />
        <Redirect to={'/catalog'} />
      </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default MainLayout;
