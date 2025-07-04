import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import Signup from './firebase_services/authentication/auth_signup.jsx';
import Signin from './firebase_services/authentication/auth_signin.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' index element={<AppLayout />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
