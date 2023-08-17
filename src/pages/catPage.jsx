import Header from '../components/header/header';
import CatPageCard from '../widgets/catPage/catPageCard';
import { useParams } from 'react-router-dom';

function CatPage() {
  const { catId } = useParams();

  return (
    <>
      <Header />
      <div className="container">
        <div className="row" id="catalog-row">
          <CatPageCard id={catId} />
        </div>
      </div>
    </>
  );
}

export default CatPage;
