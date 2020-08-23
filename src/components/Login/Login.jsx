import React, { useState, useEffect } from 'react';

import styles from './Login.module.scss';

import Modal from './../Modal';
import FormInput from './../FormInput';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  // const handleSubmit

  return (
    <Modal heading="Log in">
      <div className={styles.conatiner}>
        <div className={styles.formfield}>
          <label className={styles.label}>Email</label>
          <input type="text" placeholder="Email" name='email' onChange={e => handleInput(e)} />
        </div>
        <div className={styles.formfield}>
          <label className={styles.label}>Password</label>
          <input type="password" placeholder="Password" name='password' onChange={e => handleInput(e)} />
        </div>
        <FormInput label="Email" name="email" type="email" placeholder="Email" />
        <button className={styles.button}>Log in</button>
      </div>
    </Modal>
  );
}

export default Login;
