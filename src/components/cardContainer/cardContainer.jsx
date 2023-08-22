import { clsx } from 'clsx';

import cardContainer from './cardContainer.module.scss';

export function CardContainer({ children }) {
  return (
    <div className={clsx('container', cardContainer.cont)}> {children} </div>
  );
}
