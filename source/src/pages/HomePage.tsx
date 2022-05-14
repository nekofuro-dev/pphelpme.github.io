import Card from '@/components/cards/Card';
import Divider from '@/components/layouts/Divider';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full lg:flex-row p-3">
      <Card>

        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl md:text-4xl">Helper</h2>
          <Link to="sqlShowDifferent">SQL show different</Link>
        </div>
      </Card>
      <Divider />
      <Card>...</Card>
    </div>
  );
}
