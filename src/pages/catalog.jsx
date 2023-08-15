import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import Select from '../components/select/select';
import CatalogCards from '../widgets/catalogCards';
import Selects from '../widgets/selects';

function Catalog() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container">
          <Selects />
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
