import Header from '../components/header/header';
// import CatalogCard from '../components/catalogCard/catalogCard';
// import Loader from '../components/loader/loader';
import Navigation from '../components/navigation/navigation';
// import BreedCard from '../components/breedCard/breedCard';
// import WithoutBreedCard from '../components/withoutBreedCard/withoutBreedCard';

function Catalog() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container"></div>
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
