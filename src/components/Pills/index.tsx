import { ReactChild, ReactChildren } from 'react';
import PillContent from './styles';

interface Props {
  children: ReactChild | ReactChildren;
}

function Pill({ children }: Props) {
  return <PillContent>{children}</PillContent>;
}

export default Pill;
