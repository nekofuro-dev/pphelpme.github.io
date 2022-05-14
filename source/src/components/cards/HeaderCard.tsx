import * as React from 'react';
import Card from './Card';

export default function HeaderCard({ header, children }:
{ header: String; children: React.ReactNode }) {
  return (
    <Card>
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl md:text-4xl">
          {header}
        </h1>
        <div>
          {children}
        </div>
      </div>
    </Card>

  );
}
