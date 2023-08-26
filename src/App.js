import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ViewBook from './Pages/ViewBook';
import {Routes, Route} from "react-router-dom"

const App = ()=>{
  return(
    <div>
      <Routes>
          <Route path="/" element={<Navbar />}>
              <Route path="" element={<Home />} />
              <Route path="book" element={<ViewBook />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
