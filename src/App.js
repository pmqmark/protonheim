import React from 'react';
import Home from './page/Home';
import './css/global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from './page/ServicePage';
import Layout from './util/Layout';
import ProductPage from './page/ProductPage';
import AboutPage from './page/AboutPage';
import ContactusPage from './page/ContactusPage';
import usePageColors from './hooks/usePageColors';

function App() {

  return (
    <div className="App">
      <Router>
        <PageColorsWrapper />
        <Routes>
          <Route path='' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contactus' element={<ContactusPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
function PageColorsWrapper() {
  usePageColors();
  return null; // This component does not render anything, just sets the colors
}
export default App;
