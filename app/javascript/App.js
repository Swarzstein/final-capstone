import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navigate to="/sign_in" />}/>
          <Route path="sign_up" element={<SignUp/>} index />
          <Route path="sign_in" element={<Login/>} />
        </Routes>
      </div> 
    );
  }
  else {
    return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<h1>{user.name}</h1>}/>
          <Route path="sign_up" element={<Navigate to="/" />} index />
          <Route path="sign_in" element={<Navigate to="/" />} />
        </Routes>
      </div> 
    );
  }
}

export default App;