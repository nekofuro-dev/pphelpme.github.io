import addClasses from '../common/AddClasses';

interface HeaderProps extends React.ComponentPropsWithRef<'h1'> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}
export default function Header({ variant, ...props }: HeaderProps) {
  return addClasses(variant, 'font-notoSans text-3xl lg:text-6xl')(props);
}
