import { useEffect, useState } from 'react';
import { BREEDS_OPTIONS } from '../components/config/breeds';
import { ORDER_OPTIONS } from '../components/config/order';
import Select from '../components/select/select';
import { api } from '../api/api';

const Selects = () => {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    api.getBreedsList().then((r) => setNameList(r));
  }, []);
  const nameListOptions = [{ value: 'all', label: 'All breeds' }, ...nameList];

  return (
    <>
      <Select options={BREEDS_OPTIONS} />
      <Select options={ORDER_OPTIONS} />
      <Select options={nameListOptions} />
    </>
  );
};

export default Selects;
