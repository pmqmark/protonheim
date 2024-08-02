import React from 'react';
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from './page/ServicePage';
import Layout from './util/Layout';
import ProductPage from './page/ProductPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='' element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/products' element={<ProductPage />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
