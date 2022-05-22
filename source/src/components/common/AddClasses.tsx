import * as React from 'react';
import classNames from 'classnames';

type AddClassesType = React.ElementType | keyof JSX.IntrinsicElements;

/**
 * inject [classes] to [componentType]
 *
 * @example @see @/components/common/Button/CommonButton
 * @param componentType componentType to be injected
 * @param classes
 * @returns
 */
function addClasses<PropsType extends { className?: string }>(
  componentType: AddClassesType,
  ...classes: string[]
) {
  // eslint-disable-next-line react/function-component-definition
  return (props: PropsType): JSX.Element => React.createElement(componentType, {
    ...props,
    className: classNames(
      // eslint-disable-next-line react/destructuring-assignment
      props?.className,
      ...classes,
    ),
  });
}

export default addClasses;
