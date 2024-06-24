import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import './style.scss';

const FormInput = ({ label, name, type='text', placeholder, register, errors, rules, className, autoComplete, disabled }) => {
  return (
    <div className={`FormInput ${className ? className : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rules)}
        disabled={disabled}
      />
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

export default FormInput;

