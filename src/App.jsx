import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import CatalogCard from './components/catalogCard/catalogCard';
import './main.scss';

function App() {
  return (
    <>
      <Header />
      <CatalogCard />
      <Navigation />
    </>
  );
}

export default App;
