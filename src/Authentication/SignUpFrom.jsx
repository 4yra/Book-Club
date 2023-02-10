import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from "../FirebaseConf";
import { AuthContext } from "../context/AuthContext";

import Stack from '@mui/material/Stack';

import './auth.css'

export const SignUpForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  // const [error, setError] = useState(false);
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== '' && verifyPassword !== '') {
      if (password !== verifyPassword) {
        alert("Passwords do not match!");
        return;
      } else {

        try {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentil) => {
            const user = userCredentil.user;
            dispatch({type:"LOGIN", payload: user});
            navigate('/')

            setDoc(doc(db, 'users', userCredentil.user.uid), {
                username: username,
              })
          })
          // const res = await createUserWithEmailAndPassword(auth, email, password)
          // await setDoc(doc(db, 'users', res.user.uid), {
          //   username: username,
          // })
        } catch (err) {
          // setError(true);
          console.error(err);
        }
      }

    }

    // Perform sign up logic here...
  };

  return (
    <div className="SignUpForm">
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    placeholder='User Name'
                    onChange={(event) => setUserName(event.target.value)}
                    />
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
                
                    <input
                    type="password"
                    id="verifyPassword"
                    value={verifyPassword}
                    placeholder='Verify Password'
                    onChange={(event) => setVerifyPassword(event.target.value)}
                    />
                    {/* {error && <span></span>} */}
                <button type="submit">Sign Up</button>
            </Stack>
        </form>
    </div>
  );
};

