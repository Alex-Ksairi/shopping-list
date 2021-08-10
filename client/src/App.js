import React from 'react';

// importing route
import { Switch, Route } from "react-router-dom";

// importing components and pages
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import ShoppingList from './pages/shoppingList/ShoppingList';
import ErrorPage from './pages/errorPage/ErrorPage';

import './styles/App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <Switch>
          <Route exact path="/shopping-list" component={ShoppingList}/>
          <Route exact path="/" component={Home}/>
          <Route component={ErrorPage}/>
        </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
