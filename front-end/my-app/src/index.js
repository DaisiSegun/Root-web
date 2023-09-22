import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { AuthContextProvider } from './context/AuthContext'
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <AuthContextProvider>
        <App /> 
    </AuthContextProvider>
    </StateProvider>
  </React.StrictMode>
);
