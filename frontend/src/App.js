import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import ShopElectronicsPage from './pages/ShopElectronicsPage';
import AdminPage from './pages/AdminPage';
import ProductDescription from './components/ProductDescription';
import AuthenticationPage from './pages/AuthenticationPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
        <Route path='/electronics'>
          <ShopElectronicsPage path='electronics' />
        </Route>
        <Route path='/clothing'>
          <ShopElectronicsPage path='clothing' />
        </Route>
        <Route path='/furniture'>
          <ShopElectronicsPage path='furniture' />
        </Route>
        <Route path='/product-desc/:product_id'>
          <ProductDescription />
        </Route>
        <Route path='/authentication'>
          <AuthenticationPage />
        </Route>
        <Route path='/mycart'>
          <CartPage />
        </Route>
        <Route path='/myorders'>
          <OrderPage />
        </Route>
        <Route path='/mywishlist'>
          <WishlistPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
