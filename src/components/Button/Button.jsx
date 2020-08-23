import React from 'react';

import styles from './Button.module.scss';

const Button = ({children, ...otherProps}) => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  );
}

export default Button;
