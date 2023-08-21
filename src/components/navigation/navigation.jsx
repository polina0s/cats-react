import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

export function Navigation({
  defaultPage = 1,
  onPageChange,
  disabled = false,
}) {
  const [page, setPage] = useState(defaultPage);
  const prevPage = page - 1;
  const isPrevDisabled = prevPage < 1;

  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
    onPageChange?.(value);
  };

  return (
    <nav>
      <Pagination className="justify-content-center">
        <Pagination.Item
          linkClassName="text-black"
          disabled={isPrevDisabled || disabled}
          onClick={(e) => handlePageChange(e, page - 1)}
        >
          Previous
        </Pagination.Item>
        {!isPrevDisabled && (
          <Pagination.Item
            onClick={(e) => handlePageChange(e, page - 1)}
            disabled={disabled}
            linkClassName="text-black"
          >
            {page - 1}
          </Pagination.Item>
        )}
        <Pagination.Item
          onClick={(e) => handlePageChange(e, page)}
          disabled={disabled}
          active
          linkClassName="bg-info border-info text-black"
        >
          {page}
        </Pagination.Item>
        <Pagination.Item
          onClick={(e) => handlePageChange(e, page + 1)}
          disabled={disabled}
          linkClassName="text-black"
        >
          {page + 1}
        </Pagination.Item>
        {isPrevDisabled && (
          <Pagination.Item
            onClick={(e) => handlePageChange(e, page + 2)}
            disabled={disabled}
            linkClassName="text-black"
          >
            {page + 2}
          </Pagination.Item>
        )}
        <Pagination.Item
          onClick={(e) => handlePageChange(e, page + 1)}
          disabled={disabled}
          linkClassName="text-black"
        >
          Next
        </Pagination.Item>
      </Pagination>
    </nav>
  );
}
