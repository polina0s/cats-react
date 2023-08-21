import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/header';
import { CatPageCard } from '../widgets/catPage';

export function CatPage() {
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
