import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import Select from '../components/select/select';
import { BREEDS_OPTIONS } from '../components/config/breeds';
import { ORDER_OPTIONS } from '../components/config/order';
import CatalogCards from '../widgets/catalogCards';

function Catalog() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container">
          <Select options={BREEDS_OPTIONS} />
          <Select options={ORDER_OPTIONS} />
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
