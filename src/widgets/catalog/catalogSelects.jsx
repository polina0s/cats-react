import { useEffect, useState } from 'react';
import { BREEDS_OPTIONS } from '../../components/config/breeds';
import { ORDER_OPTIONS } from '../../components/config/order';
import Select from '../../components/select/select';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const CatalogSelects = () => {
  const [breeds, setBreeds] = useState([]);
  const [order, setOrder] = useState([]);
  const [breedId, setBreedId] = useState([]);
  const [nameList, setNameList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    api.getBreedsList().then((r) => setNameList(r));
  }, []);

  const nameListOptions = [{ value: 'all', label: 'All breeds' }, ...nameList];

  const handleSelect = ({ breeds, order, breedId }) => {
    const parsedQueryParams = queryString.parse(location.search);
    const query = queryString.stringify(
      {
        breeds: breeds,
        order: order,
        breedId: breedId,
        ...parsedQueryParams,
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
    setBreedId(value);
    handleSelect({ breeds: breeds, order: order, breedId: value });
  };

  return (
    <>
      <Select options={BREEDS_OPTIONS} onChange={handleChangeBreeds} />
      <Select options={ORDER_OPTIONS} onChange={handleChangeOrder} />
      <Select options={nameListOptions} onChange={handleChangeBreedId} />
    </>
  );
};

export default CatalogSelects;
