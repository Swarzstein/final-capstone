import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Details from './components/Details';

const App = () => {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navigate to="/sign_in" />}/>
          <Route path="sign_up" element={<SignUp/>} />
          <Route path="sign_in" element={<Login/>} />
        </Routes>
      </div> 
    );
  }
  else {
    return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sign_up" element={<Navigate to="/" />} />
          <Route path="sign_in" element={<Navigate to="/" />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </div> 
    );
  }
}

export default App;
