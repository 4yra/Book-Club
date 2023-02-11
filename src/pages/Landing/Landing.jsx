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
        height:'80vh',
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
                            <Stack style={{textShadow: '4px 4px 5px #000000', position:'relative', bottom:'50px'}}>
                                <h2 >The shared experience of knowledge and culture makes a good conversations.  </h2>
                                <h4 style={{margin:'-10px 0 0 0', textAlign:'right', fontWeight:'300'}}>Join Book Clubs and grow your community now</h4>
                                <br />
                                <ul style={{fontWeight: 'bold', margin:'100px auto', fontSize:'1.2rem'}}>
                                    <a style={{textDecoration:'none', color:'white'}} href="#search">
                                        <li>Search for book</li>
                                    </a>
                                        <li>Request early access - link</li>
                                </ul>
                            </Stack>
                        </div>
                    </div>
                    <div id="search" className="searchBGImage" style={{height:'50vh', backgroundColor:'red', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <SearchProjectGutenberg />
                    </div>
                    {/* <div id="" style={{height:'100vh', backgroundColor:'green'}}>
                        <h4>Search UI project gutenberg</h4>
                    </div>
                    <div id="footer" style={{height:'100vh', backgroundColor:'red'}}>
                        <h4>Footer</h4>
                    </div> */}
                </div>
            }
        </div>
    )
}