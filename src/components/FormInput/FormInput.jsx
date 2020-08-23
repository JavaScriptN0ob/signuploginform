import React from 'react';

import styles from './FormInput.scss';

const FormInput = ({label, name, type, placeholder, handleChange, ...otherProps}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
}

export default FormInput;
