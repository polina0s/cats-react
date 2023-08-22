import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardContainer } from '../components/cardContainer/cardContainer';
import { Header } from '../components/header';
import { CatCard } from '../widgets/catCard';

export function CatPage() {
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  const handleCardLoad = useCallback(() => setLoading(false), []);

  return (
    <>
      <Header />
      <CardContainer>
        <div className="row" id="catalog-row">
          <CatCard id={catId} isLoading={loading} onCardLoad={handleCardLoad} />
        </div>
      </CardContainer>
    </>
  );
}
