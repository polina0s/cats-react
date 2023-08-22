import Spinner from 'react-bootstrap/Spinner';

import loader from './loader.module.scss';

export function Loader() {
  return (
    <div className={`text-center ${loader.cont}`}>
      <Spinner className={loader.loader} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
