import * as React from 'react';
import addClasses from '../common/AddClasses';

const GridContainer = addClasses<React.ComponentPropsWithRef<'div'>>('div', 'grid grid-cols-1 md:grid-cols-4 gap-6');
export default GridContainer;
