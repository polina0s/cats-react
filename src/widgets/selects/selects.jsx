import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { api } from '../../api/api';
import { Select } from '../../components/select';
import { BREEDS_OPTIONS } from '../../config/breeds';
import { ORDER_OPTIONS } from '../../config/order';

export function Selects({ disabled }) {
  const [breeds, setBreeds] = useState([]);
  const [order, setOrder] = useState([]);
  const [breedId, setBreedId] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [nameListLoading, setNameListLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const parsedQueryParams = queryString.parse(location.search);

  useEffect(() => {
    api
      .getBreedsList()
      .then((r) => setNameList(r))
      .finally(() => setNameListLoading(false));
  }, []);

  const nameListOptions = [{ value: 'all', label: 'All breeds' }, ...nameList];

  const handleSelect = ({ breeds, order, breedId }) => {
    const query = queryString.stringify(
      {
        ...parsedQueryParams,
        breeds: breeds,
        order: order,
        breedId: breedId,
      },
      { skipNull: true },
    );

    navigate({
      search: query,
    });
  };

  const handleChangeBreeds = (value) => {
    setBreeds(value);
    handleSelect({ breeds: value, order: order, breedId: breedId });
  };
  const handleChangeOrder = (value) => {
    setOrder(value);
    handleSelect({ breeds: breeds, order: value, breedId: breedId });
  };
  const handleChangeBreedId = (value) => {
    const id = value === 'all' ? null : value;
    setBreedId(id);
    handleSelect({
      breeds: breeds,
      order: order,
      breedId: id,
    });
  };

  return (
    <>
      <Select
        options={BREEDS_OPTIONS}
        onChange={handleChangeBreeds}
        value={parsedQueryParams.breeds}
        disabled={disabled}
      />
      <Select
        options={ORDER_OPTIONS}
        onChange={handleChangeOrder}
        value={parsedQueryParams.order}
        disabled={disabled}
      />
      <Select
        options={nameListOptions}
        onChange={handleChangeBreedId}
        value={parsedQueryParams.breedId}
        disabled={nameListLoading || disabled}
      />
    </>
  );
}
