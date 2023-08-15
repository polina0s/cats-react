import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import CatalogCards from '../widgets/catalog/catalogCards';
import CatalogSelects from '../widgets/catalog/catalogSelects';

function Catalog() {
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
      <Navigation />
    </>
  );
}

export default Catalog;
