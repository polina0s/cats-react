import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

function Navigation({ defaultPage = 1, onPageChange }) {
  const [page, setPage] = useState(defaultPage);
  const prevPage = page - 1;
  const isPrevDisabled = prevPage < 1;

  return (
    <nav>
      <Pagination className="justify-content-center">
        <Pagination.Item disabled={isPrevDisabled}>1</Pagination.Item>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>
    </nav>
  );
}

export default Navigation;
