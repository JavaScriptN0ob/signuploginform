import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from './../../firebase/firebase.utils';

import styles from './Login.module.scss';

import Modal from './../Modal';
import FormInput from './../FormInput';
import Button from './../Button';
import Overlay from './../Overlay';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const onLoginWithEmail = (e) => {
    e.preventDefault();
    const {email, password} = form;
    auth.signInWithEmailAndPassword(email, password);
  }

  const onLoginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <Overlay>
      <Modal heading="Log in">
        <div className={styles.conatiner}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            handleChange={handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          {/* <button onClick={signInWithGoogle}>Google</button> */}
          <Button handleSubmit={onLoginWithEmail}>Log in</Button>
          <div className={styles.seperator}>or log in with</div>
          <Button handleSubmit={onLoginWithGoogle} isGoogle>Google</Button>
        </div>
      </Modal>
    </Overlay>
  );
}

export default Login;
