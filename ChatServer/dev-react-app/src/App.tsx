import React, { useEffect, Suspense } from 'react';
import styles from './App.scss';
import { useDispatch } from 'react-redux';
import { Routes } from './root-router';
import { Route, BrowserRouter } from 'react-router-dom';
import { getUser } from './actions/user-login.action';
import { styleNames } from './services/styleNames';
import Loading from './components/Loading/Loading';
import SafeGuard from './SafeGuard';
import AlertContainer from './containers/AlertContainer/AlertContainer';

const sn = styleNames(styles);


function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getUser()); });
  return (
    <>
      <SafeGuard dispatch={dispatch}>
        <Suspense fallback={<div className={sn('loading')}><Loading/></div>}>
          <BrowserRouter>
            <Route component={Routes}></Route>
          </BrowserRouter>
        </Suspense>
      </SafeGuard>
    </>
  );
}

export default App;
