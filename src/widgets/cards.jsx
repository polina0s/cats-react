import { useEffect, useState } from 'react';
import { api } from '../api/api';
import queryString from 'query-string';
import CatalogCard from '../components/catalogCard/catalogCard';
import { useLocation } from 'react-router-dom';
import { BREEDS_KEYS, BREEDS_MAP } from '../components/config/breeds';
import { ORDER_KEYS, ORDER_MAP } from '../components/config/order';

const Cards = () => {
  const [state, setState] = useState([]);
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search);
  const page = parsedQueryParams.page || 1;
  const breed = parsedQueryParams.breeds || BREEDS_KEYS.RANDOM;
  const order = parsedQueryParams.order || ORDER_KEYS.RANDOM;
  const name = parsedQueryParams.breedId || null;

  useEffect(() => {
    api
      .getCats({
        page: page,
        limit: 12,
        breed: BREEDS_MAP.get(breed),
        order: ORDER_MAP.get(order),
        breedId: name,
      })
      .then((r) => setState(r));
  }, [breed, name, order, page]);

  return state.map((el) => (
    <CatalogCard key={el.id} id={el.id} url={el.url} link={el.url} />
  ));
};

export default Cards;
