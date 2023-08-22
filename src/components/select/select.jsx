import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

export function Select({ onChange, options, value, disabled }) {
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
      onChange={handleChange}
      value={select}
      disabled={disabled}
    >
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </Form.Select>
  );
}
