import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({heading, children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <heading className={styles.heading}>{heading}</heading>
        <div className={styles.close}><i class="ri-close-fill ri-2x"></i></div>
      </header>
      <content className={styles.content}>{children}</content>
    </div>
  );
}

export default Modal;
