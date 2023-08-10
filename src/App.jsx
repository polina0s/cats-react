import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import './main.scss';

function App() {
  return (
    <>
      <Header />
      <Navigation
        defaultPage={3}
        onPageChange={(value) => console.log(value)}
      />
    </>
  );
}

export default App;
