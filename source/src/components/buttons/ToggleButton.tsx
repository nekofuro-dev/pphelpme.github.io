import * as React from 'react';
import addClasses from '../common/AddClasses';

const ToggleButtonRoot = addClasses<React.ComponentPropsWithRef<'button'>>('button', 'rounded-full bg-slate-500 h-fit');

interface ToggleButtonProps extends React.ComponentPropsWithRef<typeof ToggleButtonRoot> {
  onToggle: (newIsOn: Boolean) => Boolean;
  containerWidth: string;
  circleWidth: string;
}
export default function ToggleButton({ onToggle, containerWidth, circleWidth }: ToggleButtonProps) {
  const [isOn, setIsOn] = React.useState<Boolean>(false);
  const switchIsOn = () => {
    setIsOn((prev) => !prev);
  };

  const onClick = () => {
    const isSuccessToggle = onToggle(!isOn);
    if (!isSuccessToggle) {
      return;
    }
    switchIsOn();
  };

  const positionClass = isOn ? 'w-full' : circleWidth;
  return (
    <ToggleButtonRoot onClick={onClick} className={`${containerWidth} p-1`}>
      <div className={`flex justify-end transition-all ${positionClass}`}>
        <div className={`rounded-full ${circleWidth} aspect-square transition-all bg-slate-50 m-0 p-0`} />
      </div>
    </ToggleButtonRoot>
  );
}
