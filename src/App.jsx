import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
// import CatalogCard from './components/catalogCard/catalogCard';
import Loader from './components/loader/loader';
import './main.scss';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container"></div>
        <div className="row" id="catalog-row">
          {/* <CatalogCard /> */}
          <Loader />
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default App;
