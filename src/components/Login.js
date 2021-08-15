import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

import axiosWithAuth from "../helpers/axiosWithAuth";

const initialValues = { username: 'Lambda', password: 'School' };

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const {push} = useHistory;
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChanges = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
    axiosWithAuth()
      .post('/api/login', formValues)
      .then((res) => {
        console.log('Login Post Success', res);
        localStorage.setItem('token', res.data.payload)
        push('/bubblepage')
      })
      .catch(err => {
        console.log(err);
      })
  }

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input 
          id='username'
          name='username'
          data-testid='username'
          value={formValues.username}
          onChange={handleChanges}
        />
        <label htmlFor='password'>password</label>
        <input 
          id='password'
          name='password'
          data-testid='password'
          value={formValues.password}
          onChange={handleChanges}
        />
        <button>Log In</button>
      </form>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"