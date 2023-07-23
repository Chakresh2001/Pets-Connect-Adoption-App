// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { Store } from './Redux/store';
import { AdminAuthContext } from './context/AdminAuthContext';
// import { store } from './Redux/store';
document.title="Pet-Connect"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <AdminAuthContext>
      <Provider store={Store}>
        <App />
      </Provider>
    </AdminAuthContext>
    </BrowserRouter>
</ChakraProvider>
);
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
