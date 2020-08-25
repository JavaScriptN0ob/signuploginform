import React, { useState, useEffect  } from 'react';
// import { withRouter } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    email: '',
  });

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        setCurrentUser({
          email: '',
        });
      }
      setCurrentUser({
        email: user.email,
      });
      console.log(currentUser);
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  const userEmail = currentUser.email;

  return (
    <div className="App">
      <Login />
      {/* <Signup /> */}
        {/* {
          currentUser ? <Home userEmail={userEmail} /> : <Login />
        } */}
    </div>
  );
}

export default App;
