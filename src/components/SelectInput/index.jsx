import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import './style.scss';

const SelectInput = ({ label, options, defaultOption, onChange, errors, name, register, rules }) => {
  return (
    <div className='SelectInput'>
      <label>{label}</label>
      <select {...register(name, rules)} onChange={onChange} className='options'>
        <option value="">{defaultOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className='text-red-500 mt-1'>{message}</p>
        )}
      />
    </div>
  );
};

export default SelectInput;
