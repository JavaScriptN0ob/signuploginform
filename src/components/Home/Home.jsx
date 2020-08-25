import React from 'react';
import { logOut } from './../../firebase/firebase.utils';

import styles from './Home.module.scss';
import logo from './../../logo.svg';
import Button from './../Button';

const Home = ({userEmail}) => {

  const onLogOut = () => {
    logOut();
  }

  return (
    <div className={styles.home}>
      <img src={logo} className={styles.logo} alt="logo" />
          You are home, {userEmail}
      <Button handleSubmit={onLogOut}>Log out</Button>
    </div>
  );
}

export default Home;
