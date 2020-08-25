import React from 'react';

import styles from './Button.module.scss';

const Button = ({children, handleSubmit, ...otherProps}) => {
  return (
    <button
      className={styles.button}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
