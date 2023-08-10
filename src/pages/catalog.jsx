import Header from '../components/header/header';
// import CatalogCard from '../components/catalogCard/catalogCard';
// import Loader from '../components/loader/loader';
import Navigation from '../components/navigation/navigation';

function Catalog() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container"></div>
        <div className="row" id="catalog-row">
          {/* <CatalogCard /> */}
          {/* <Loader /> */}
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default Catalog;
