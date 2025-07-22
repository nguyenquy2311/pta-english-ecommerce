import React from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import Authen from './Authen/Authen.jsx';

function App() {
  return (
    <Router>
      <Authen>
        <Routes>
          <Route path='/' element={<AppLayout />} />
          <Route path='/signedin' element={<AppLayout />} />
        </Routes>
      </Authen>
    </Router>
  )
}

export default App
