import Spinner from 'react-bootstrap/Spinner';

export function Loader() {
  return (
    <div className="text-center spinner-container">
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
