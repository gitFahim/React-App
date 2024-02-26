// pages/_app.js
import React from 'react';
import { CartProvider } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
);

export default MyApp;