import React, { useEffect, Suspense } from 'react';
import styles from './App.scss';
import { useDispatch } from 'react-redux';
import { Routes } from './root-router';
import { Route, BrowserRouter } from 'react-router-dom';
import { getUser } from './actions/user-login.action';
import { styleNames } from './services/styleNames';

const sn = styleNames(styles);


function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getUser()); });
  return (
    <Suspense fallback={<span className={sn('loading')}>Loading...</span>}>
      <BrowserRouter>
        <Route component={Routes}></Route>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
