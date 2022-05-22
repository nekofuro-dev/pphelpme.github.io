import classNames from 'classnames';
import * as React from 'react';
import addClasses from '../common/AddClasses';

const CommonButton = addClasses<React.ComponentPropsWithRef<'button'>>('button', 'bg-blue-300');

interface CommonButtonProps extends React.ComponentPropsWithRef<typeof CommonButton> {}
interface StyledButtonProps extends CommonButtonProps {
  isRound: boolean
}
export const StyledButton = ({ isRound = false, ...buttonProps } : StyledButtonProps) => {
  const classes = classNames(
    {
      'rounded-md': isRound,
    },
  );
  return addClasses<CommonButtonProps>(CommonButton, classes)(buttonProps);
};

export default CommonButton;
