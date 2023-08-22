import cardContainer from './cardContainer.module.scss';
import { clsx } from 'clsx';

export function CardContainer({ children }) {
  return <div className={cardContainer.cont}>{children}</div>;
}
