import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Outlet } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default hot(App);
