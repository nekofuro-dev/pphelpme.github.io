import * as React from 'react';

export default function ErrorPage({ errorMessage }: { errorMessage: String }) {
  return (
    <div className="artboard p-3">
      <span>{errorMessage}</span>
    </div>
  );
}
