import React, { useState } from "react";
// components
// import { SignUpForm } from "../../Authentication/SignUpFrom"
import { LoginForm } from "../../Authentication/LoginForm"
import { Description } from "./Description";
// import bgIMG from "../../static/leaf.jpg"
export const Landing = () => {
    const SignUpFormStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "400px",
        maxWidth: "80vw",
    }
    const LandingStyle = {
        width: "90vw",
        maxWidth: "800px",
        margin: "0 auto",
    }
    const conatinerDivStyle = {
        position: "realtive", 
        // backgroundImage: `url(${bgIMG})`,
        // backgroundSize: 'cover',
        width: "100vw",
        height : "100vh",
    }
    const [login, setLogin] = useState(false)
    return (
        <div className="bgImage" style={conatinerDivStyle}>
            <div className="TopNav" >
                <p onClick={() => (login ? setLogin(false) : setLogin(true))}>{login ? "Description" : "Login"}</p>
            </div>
            <div style={LandingStyle}>
                {login ? <div style={SignUpFormStyle}><LoginForm/></div> : <Description style={{position: "realtive"}}/>}
            </div>
        </div>
    )
}