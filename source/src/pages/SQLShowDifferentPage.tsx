import * as React from 'react';
import Card from '@/components/cards/Card';
import Divider from '@/components/layouts/Divider';
import HeaderCard from '@/components/cards/HeaderCard';

export default function SQLShowDifferentPage() {
  return (
    <div>
      <HeaderCard header="Set 1">
        <textarea className="textarea w-full" placeholder="set 1" />
      </HeaderCard>
      <Divider />
      <HeaderCard header="Set 2">
        <textarea className="textarea w-full" placeholder="set 2" />
      </HeaderCard>
    </div>
  );
}
