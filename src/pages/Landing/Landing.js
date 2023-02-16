import React, { useState } from "react";
import Stack from "@mui/material/Stack"
// components
import { SearchProjectGutenberg } from "../../components/Search/ProjectGutenberg"
import { LoginForm } from "../../Authentication/LoginForm"
// import { Description } from "./Description";
// import search from "../../static/leaf.jpg"
export const Landing = () => {
    const descriptionStyle = {
        textAlign: 'left',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: '0 auto',
        width: '90%',
        maxWidth: "800px",
    }
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
        height:'100vh',
    }
    const conatinerDivStyle = {
        position: "realtive", 
        width: "100vw",
        height : "100vh",
    }
    const [login, setLogin] = useState(false)
    return (
        <div className="bgImage" style={conatinerDivStyle}>
            <div className="TopNav" >
                <div style={{margin:'-25px 0 0 0'}}>
                    <p style={{position: 'absolute', left:'20px', fontSize:'0.9rem', letterSpacing:'0.1rem', margin:'0', fontWeight:'200'}}>
                    <i>Book Clubs</i> </p>
                    <h6 style={{margin:'15px 0 0 0', position: 'absolute', left:'20px', fontSize:'0.6rem', letterSpacing:'0.1rem', padding:'0', fontWeight:'200'}}>Home growing communities</h6>
                </div>
                
                <p style={{cursor: 'pointer', caretColor: 'red'}} onClick={() => (login ? setLogin(false) : setLogin(true))}>{login ? "Description" : "Login"}</p>
            </div>
            {login ? <div style={SignUpFormStyle}><LoginForm/></div> : 
                <div>
                    <div style={LandingStyle}>
                        <div style={descriptionStyle}>
                            <Stack style={{textShadow: '2px 2px 6px #000000', position:'relative'}}>
                                <h2 >The shared experience of knowledge and culture makes a good conversations.  </h2>
                                <h4 style={{margin:'-10px 0 0 0', textAlign:'right', fontWeight:'300'}}>Join Book Clubs and grow your community</h4>
                                <br />

                                <SearchProjectGutenberg />
                            </Stack>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}