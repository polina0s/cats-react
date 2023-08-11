import Header from '../components/header/header';
// import CatalogCard from '../components/catalogCard/catalogCard';
// import Loader from '../components/loader/loader';
import Navigation from '../components/navigation/navigation';
// import BreedCard from '../components/breedCard/breedCard';
// import WithoutBreedCard from '../components/withoutBreedCard/withoutBreedCard';
import Select from '../components/select/select';
import { BREEDS_OPTIONS } from '../components/config/breeds';
import { ORDER_OPTIONS } from '../components/config/order';

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
          {/* <CatalogCard /> */}
          {/* <Loader /> */}
          {/* <BreedCard /> */}
          {/* <WithoutBreedCard /> */}
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default Catalog;
