import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { BreedCard } from '../../components/breedCard';
import { Loader } from '../../components/loader';
import { WithoutBreedCard } from '../../components/withoutBreedCard';

export function CatPageCard({ id, onCardLoad, isLoading }) {
  const [data, setData] = useState('');

  useEffect(() => {
    api
      .getCatById(id)
      .then((result) => setData(result))
      .finally(() => onCardLoad?.());
  }, [id, onCardLoad]);

  if (isLoading) {
    return <Loader />;
  }

  if (data.breeds) {
    const breed = data.breeds[0];
    return (
      <BreedCard
        url={data.url}
        name={breed.name}
        wiki={breed.wiki}
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
      />
    );
  } else {
    return <WithoutBreedCard src={data.url} />;
  }
}
