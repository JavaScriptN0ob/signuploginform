import React, { useState, useEffect  } from 'react';
import fire from './config/fire';
// import app from 'firebase/app';


import logo from './logo.svg';
import './App.css';

// import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState({
    user: null,
  });

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (!user) {
  //       setUser({
  //         user: null
  //       });
  //     }
  //     setUser({user});
  //   })
  // }

  // useEffect(() => {
  //   authListener();
  // }, [user]);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Signup />
      </div>
        {/* {
          user ? <Home /> : <Signup />
        } */}
    </div>
  );
}

export default App;
