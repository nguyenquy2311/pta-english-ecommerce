import React from 'react';
import { BrowserRouter as Router,Routes, Route, useRoutes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />} />
      </Routes>
    </Router>
  )
}

export default App
