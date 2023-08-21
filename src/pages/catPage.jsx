import Header from '../components/header/header';
import CatPageCard from '../widgets/catPage/catPageCard';
import { useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';

function CatPage() {
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  const handleCardLoad = useCallback(() => setLoading(false), []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row" id="catalog-row">
          <CatPageCard
            id={catId}
            isLoading={loading}
            onCardLoad={handleCardLoad}
          />
        </div>
      </div>
    </>
  );
}

export default CatPage;
