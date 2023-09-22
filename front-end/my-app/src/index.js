import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { AuthContextProvider } from './context/AuthContext'
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer";
import { CartProvider } from './components/home/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CartProvider>
  <StateProvider initialState={initialState} reducer={reducer}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StateProvider>
</CartProvider>

  </React.StrictMode>
);
