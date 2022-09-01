import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navigation/Navbar";
import ScrollTopButton from "./components/UI/ScrollTopButton";
import ProductsItems from "./components/Products/ProductsItems";
import {
  CartPage,
  CheckoutPage,
  HomePage,
  KidsPage,
  LadiesPage,
  MenPage,
  ProductDetailsPage,
  ProductItemsPage
} from "./pages";

function App() {
  const location = useLocation();


  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/home'>
            <HomePage />
          </Route>
          <Route exact path='/men'>
            <MenPage />
          </Route>
          <Route exact path='/ladies'>
            <LadiesPage />
          </Route>
          <Route exact path='/kids'>
            <KidsPage />
          </Route>
          <Route exact path='/products'>
            <ProductsItems />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/checkout'>
            <CheckoutPage />
          </Route>
          <Route exact path='/:id/:productId'>
            <ProductDetailsPage />
          </Route>
          <Route exact path='/:id'>
            <ProductItemsPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <ScrollTopButton />
    </>
  );
}

export default App;
