import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import CatalogCards from '../widgets/catalog/catalogCards';
import CatalogSelects from '../widgets/catalog/catalogSelects';
import queryString from 'query-string';

function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();
  const parsedQueryParams = queryString.parse(location.search);

  const handlePageChange = (value) => {
    const query = queryString.stringify(
      { ...parsedQueryParams, page: value },
      { skipNull: true },
    );
    navigate({ search: query });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container">
          <CatalogSelects />
        </div>
        <div className="row" id="catalog-row">
          <CatalogCards />
        </div>
      </div>
      <Navigation
        onPageChange={handlePageChange}
        defaultPage={+parsedQueryParams.page || 1}
      />
    </>
  );
}

export default Catalog;
