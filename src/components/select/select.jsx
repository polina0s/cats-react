import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function Select({ onChange, options, value, disabled, style }) {
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
      style={style}
      onChange={handleChange}
      value={select}
      disabled={disabled}
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
