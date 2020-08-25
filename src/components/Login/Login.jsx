import React, { useState, useEffect } from 'react';

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
      [name]: value
    });
  }

  useEffect(() => {
    console.log(form)
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
          <Button>Log in</Button>
        </div>
      </Modal>
    </Overlay>
  );
}

export default Login;
