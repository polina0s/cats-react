import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

function Navigation({ defaultPage = 1, onPageChange }) {
  const [page, setPage] = useState(defaultPage);
  const prevPage = page - 1;
  const isPrevDisabled = prevPage < 1;

  return (
    <nav>
      <Pagination className="justify-content-center">
        <Pagination.Item linkClassName="text-black" disabled={isPrevDisabled}>
          Previous
        </Pagination.Item>
        {!isPrevDisabled && <Pagination.Item>{page - 1}</Pagination.Item>}
        <Pagination.Item active linkClassName="bg-info border-info text-black">
          {page}
        </Pagination.Item>
        <Pagination.Item linkClassName="text-black">{page + 1}</Pagination.Item>
        {isPrevDisabled && (
          <Pagination.Item linkClassName="text-black">
            {page + 2}
          </Pagination.Item>
        )}
        <Pagination.Item linkClassName="text-black">Next</Pagination.Item>
      </Pagination>
    </nav>
  );
}

export default Navigation;
