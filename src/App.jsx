/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from './redux/actions/app';
import RouteApp from './routes/route';
import { setAuthentication } from './service/api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== null) {
      setAuthentication(accessToken);
      dispatch(
        setToken({
          accessToken,
        })
      );
      dispatch(setUser());
    }
  }, []);
  return (
    <RouteApp />
  );
}

export default App;
