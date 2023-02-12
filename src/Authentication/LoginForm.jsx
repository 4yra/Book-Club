import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConf";
import { AuthContext } from "../context/AuthContext";

// import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import Stack from '@mui/material/Stack';
import './auth.css'


export const LoginForm = () => {
  const inputs = {
    height: '30px',
    padding: '0 0 0 10px',
    borderRadius: '20px',
    fontSize: '1rem',
    border:'none',
  }
  const inputsBTN = {
    height: '30px',
    padding: '0 0 0 10px',
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderColor: 'rgba(255, 255, 255)',
  }

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

    <div className="LoginForm">
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                    <input
                    style={inputs}
                    type="email"
                    id="email"
                    value={email}
                    placeholder='Email'
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    <AlternateEmailIcon style={{ fontSize:'1rem', position:'absolute', right:'40px', top:'12px', color:'black'}}/>

                    <input
                    style={inputs}
                    type="password"
                    id="password"
                    value={password}
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    <VpnKeyIcon style={{fontSize:'1rem', position:'absolute', right:'40px', top:'66px', color:'black'}}/>

                <button type="submit" style={inputsBTN}>Login</button>
            </Stack>
        </form>
        {error && <span style={{fontSize:'0.9rem', color:'red'}}>Wrong email or password</span>}
    </div>
  );
};

