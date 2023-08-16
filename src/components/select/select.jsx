import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function Select({ onChange, options, value }) {
  const [select, setSelect] = useState('');

  const handleChange = (e) => {
    setSelect(e.target.value);
    onChange?.(e.target.value);
  };

  useEffect(() => {
    setSelect(value);
  }, [value]);

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
