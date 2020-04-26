import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { Routes } from './root-router';
import { Route, BrowserRouter } from 'react-router-dom';
import { getUser } from './actions/user-login.action';


function App() {
  const dispatch = useDispatch();

  dispatch(getUser());
  return (
    <BrowserRouter>
      <Route component={Routes}></Route>
    </BrowserRouter>
  );
}

export default App;
