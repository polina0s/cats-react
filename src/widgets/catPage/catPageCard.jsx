import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import BreedCard from '../../components/breedCard/breedCard';
import WithoutBreedCard from '../../components/withoutBreedCard/withoutBreedCard';

function CatPageCard({ id }) {
  const [data, setData] = useState('');

  useEffect(() => {
    api.getCatById(id).then((result) => {
      setData(result);
    });
  }, [id]);

  if (data.breeds) {
    const breed = data.breeds[0];
    return (
      <BreedCard
        url={data.url}
        name={breed.name}
        wiki={breed.wiki}
        adaptibility={breed.adaptibility}
        description={breed.description}
        childFriendly={breed.child_friendly}
        temperament={breed.temperament}
        dogFriendly={breed.dog_friendly}
        health={breed.health}
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

export default CatPageCard;
