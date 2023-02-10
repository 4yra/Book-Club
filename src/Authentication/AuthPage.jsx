import { useState } from "react";
import { Box } from "@mui/system";
import './auth.css'

import { LogInForm } from "./LogInFrom";
import { SignUpForm } from "./SignUpFrom";

export const AuthPage = () => {
    const [toggleState, setToggleState] = useState(true);
    return (
        <>
            <button className="toggleSignInBTN" onClick={() => setToggleState(!toggleState)}>
                {toggleState ? 'Create Account' : 'Log in with existing account'}
            </button>
            <div className='AuthPageDiv'>
                <Box className='AuthPageBox' >
                    {toggleState ? <LogInForm /> : <SignUpForm />}
                </Box>
            </div>
        </>
    )
}