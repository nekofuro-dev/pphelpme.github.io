import Card from '@/components/cards/Card';
import * as React from 'react';
import GridContainer from '../../grids/GridContainer';

interface GridPageProps {
  /**
   * list of item data displayed in the grid
   */
  items: Record<string, any>[];
  /**
   * item[keyField] as ItemComponent key attribute (React key attribute)
   */
  keyField: string;
  /**
   * component for display item
   */
  ItemComponent: React.ElementType
}

export default function GridPage(
  { items, keyField, ItemComponent }: GridPageProps,
) {
  return (
    <GridContainer className="max-w-5xl p-3 m-auto">
      {
        items.map(
          (data, index) => {
            const key: string = data[keyField] ?? index;
            return (
              <Card className="max-w-none md:max-sm">
                <ItemComponent {...data} key={key} />
              </Card>
            );
          },
        )
      }
    </GridContainer>
  );
}
