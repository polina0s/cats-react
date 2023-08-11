import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Select({ onChange, options }) {
  const [select, setSelect] = useState('random');

  const handleChange = (e) => {
    setSelect(e.target.value);
    onChange?.();
  };

  return (
    <Form.Select
      className="mb-4 me-2"
      style={{ width: '170px' }}
      onChange={handleChange}
      value={select}
    >
      {options.map((obj) => {
        return (
          <option key={obj.value} value={obj.value}>
            {obj.label}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default Select;
