import React from 'react';

import styles from './Button.module.scss';

const Button = ({children, handleSubmit, ...otherProps}) => {
  return (
    <button
      className={styles.button}
      onSubmit={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
