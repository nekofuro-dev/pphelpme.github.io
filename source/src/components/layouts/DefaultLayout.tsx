import * as React from 'react';
import { Outlet } from 'react-router-dom';
import ToggleButton from '../buttons/ToggleButton';
import Header from '../typography/Header';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">

      <div className="header-root flex justify-between p-6">
        <Header variant="h1">pphelpme</Header>
        <div>
          <ToggleButton
            onToggle={() => true}
            containerWidth="w-20"
            circleWidth="w-8"
          />
        </div>
      </div>
      <div className="page-root grow">
        {children}
      </div>
    </div>
  );
}
