import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aos from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Aos.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-out',
});