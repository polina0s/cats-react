import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import CatalogCards from '../widgets/catalog/catalogCards';
import CatalogSelects from '../widgets/catalog/catalogSelects';
import queryString from 'query-string';
import { useCallback, useState } from 'react';

function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const parsedQueryParams = queryString.parse(location.search);

  const handlePageChange = (value) => {
    const query = queryString.stringify(
      { ...parsedQueryParams, page: value },
      { skipNull: true },
    );
    navigate({ search: query });
  };

  const handleCatsLoad = useCallback(() => setLoading(false), []);
  const handleBeforeCatsLoad = useCallback(() => setLoading(true), []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container">
          <CatalogSelects disabled={loading} />
        </div>
        <div className="row" id="catalog-row">
          <CatalogCards
            isLoading={loading}
            onCatsLoad={handleCatsLoad}
            beforeCatsLoad={handleBeforeCatsLoad}
          />
        </div>
      </div>
      <Navigation
        onPageChange={handlePageChange}
        defaultPage={+parsedQueryParams.page || 1}
        disabled={loading}
      />
    </>
  );
}

export default Catalog;
