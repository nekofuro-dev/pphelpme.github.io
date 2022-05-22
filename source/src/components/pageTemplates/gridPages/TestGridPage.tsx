import * as React from 'react';
import GridPage from './GridPage';

interface TestData {
  id: number;
  name: string;
}

function TestItemElement({ id, name }: TestData) {
  return (
    <div className="test-item-element">
      id:
      {' '}
      {id}
      name:
      {' '}
      {name}
    </div>
  );
}

export default function TestItemGridPage() {
  const testItemList: TestData[] = [
    { id: 1, name: 'peter' },
    { id: 2, name: 'a' },
    { id: 3, name: 'apple' },
    { id: 4, name: 'cat' },
    { id: 5, name: 'test' },
    { id: 6, name: 'bbb' },
  ];

  return <GridPage items={testItemList} keyField="id" ItemComponent={TestItemElement} />;
}
