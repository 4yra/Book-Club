import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConf";
import { AuthContext } from "../../context/AuthContext";

import Stack from '@mui/material/Stack';
import './auth.css'


export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentil) => {
      const user = userCredentil.user;
      dispatch({type:"LOGIN", payload: user});
      navigate('/')
    })
    .catch((err) => {
      setError(true)
      console.log(`Error Messag: ${err}`);
    })
  };
  return (
    <div className="LogInForm">
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder='Email'
                    onChange={(event) => setEmail(event.target.value)}
                    />
                
                    <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)}
                    />

                <button type="submit">Login</button>
                {error && <span>Wrong email or password</span>}
            </Stack>
        </form>
    </div>
  );
};

