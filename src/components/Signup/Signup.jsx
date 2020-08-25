import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';

import styles from './Signup.module.scss';

import Modal from './../Modal';
import FormInput from './../FormInput';
import Button from './../Button';
import Overlay from './../Overlay';

const Signup = ({ props }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const {email, password} = userCredentials;
    auth.createUserWithEmailAndPassword(email, password)
    .then((u) => {console.log(u)})
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log(userCredentials);
  }, [userCredentials]);

  return (
    <Overlay>
      <Modal heading="Sign up">
        <form className={styles.conatiner}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={userCredentials.email}
            handleChange={handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            required
            value={userCredentials.password}
            handleChange={handleChange}
          />
          <FormInput
            label="Comfirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Comfirm Password"
            required
            value={userCredentials.confirmPassword}
            handleChange={handleChange}
          />
          <Button type="submit" handleSubmit={onSignUp}>Sign up</Button>
        </form>
      </Modal>
    </Overlay>
  );
}

export default Signup;
