import queryString from 'query-string';
import { CatalogCard } from '../../components/catalogCard';
import { Loader } from '../../components/loader';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BREEDS_KEYS, BREEDS_MAP } from '../../components/config/breeds';
import { ORDER_KEYS, ORDER_MAP } from '../../components/config/order.js';

export const CatalogCards = ({ onCatsLoad, isLoading, beforeCatsLoad }) => {
  const [state, setState] = useState([]);
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search);
  const page = parsedQueryParams.page || 1;
  const breed = parsedQueryParams.breeds || BREEDS_KEYS.RANDOM;
  const order = parsedQueryParams.order || ORDER_KEYS.RANDOM;
  const name = parsedQueryParams.breedId || null;

  useEffect(() => {
    let ignore = false;
    beforeCatsLoad?.();
    api
      .getCats({
        page: page,
        limit: 12,
        breed: BREEDS_MAP.get(breed),
        order: ORDER_MAP.get(order),
        breedId: name,
      })
      .then((r) => {
        if (!ignore) {
          setState(r);
        }
      })
      .finally(() => {
        if (!ignore) {
          onCatsLoad?.();
        }
      });

    return () => {
      ignore = true;
    };
  }, [breed, name, order, page, onCatsLoad, beforeCatsLoad]);

  if (isLoading) return <Loader />;

  return state.map((el) => (
    <CatalogCard key={el.id} id={el.id} url={el.url} link={`cat/${el.id}`} />
  ));
};
