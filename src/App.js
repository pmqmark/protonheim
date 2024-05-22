import React from 'react';
import Home from './page/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './util/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
