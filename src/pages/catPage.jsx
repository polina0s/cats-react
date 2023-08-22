import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/header';
import { CatCard } from '../widgets/catCard';

export function CatPage() {
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  const handleCardLoad = useCallback(() => setLoading(false), []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row" id="catalog-row">
          <CatCard id={catId} isLoading={loading} onCardLoad={handleCardLoad} />
        </div>
      </div>
    </>
  );
}
