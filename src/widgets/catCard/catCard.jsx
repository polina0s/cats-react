import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../api/api';
import { BreedCard } from '../../components/breedCard';
import { Loader } from '../../components/loader';
import { WithoutBreedCard } from '../../components/withoutBreedCard';

export function CatCard({ id, onCardLoad, isLoading }) {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const backToPrevPage = () => navigate(-1);

  useEffect(() => {
    api
      .getCatById(id)
      .then((result) => setData(result))
      .catch(() => navigate('error'))
      .finally(() => onCardLoad?.());
  }, [id, onCardLoad]);

  if (isLoading) {
    return <Loader />;
  }

  if (data.breeds?.length) {
    const breed = data.breeds[0];
    return (
      <BreedCard
        url={data.url}
        name={breed.name}
        wiki={breed.wikipedia_url}
        adaptability={breed.adaptability}
        description={breed.description}
        childFriendly={breed.child_friendly}
        temperament={breed.temperament}
        dogFriendly={breed.dog_friendly}
        health={breed.health_issues}
        strangerFriendly={breed.stranger_friendly}
        intelligence={breed.intelligence}
        lifeSpan={breed.life_span}
        origin={breed.origin}
        socialNeeds={breed.social_needs}
        onClick={backToPrevPage}
      />
    );
  }

  return <WithoutBreedCard src={data.url} onClick={backToPrevPage} />;
}
