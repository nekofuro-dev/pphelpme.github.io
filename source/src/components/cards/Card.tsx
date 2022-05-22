import * as React from 'react';

export default function Card({ className = '', children }:
{ className?: String; children: React.ReactNode }) {
  return (
    <div className={`grid flex-grow card bg-base-300 bg-slate-600 rounded-lg p-3 ${className ?? ''}`}>{children}</div>
  );
}
