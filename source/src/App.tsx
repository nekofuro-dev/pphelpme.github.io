import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Dummy from '@/components/dummy';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="m-8 lg:m-16">
        <h1 className="font-notoSans text-3xl lg:text-6xl">pphelpme</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default hot(App);
