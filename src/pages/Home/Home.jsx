import React, { useContext, useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConf"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { UserAcountDashboard } from "./UserAcountDashboard";
import { BookClubDashboard } from "./BookClubDashboard";
import { EPUBReader } from "../EpubView/EPUBReader";
// import { Discourse } from "../Discourse/Discourse";
import { ForumView } from "../Discourse/ForumView";

import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import Stack from "@mui/material/Stack"
export const Home = () => {
    const [userAcountDashboard, setUserAcountDashboard] = useState(true);
    const [bookClubDashboard, setBookClubDashboard] = useState(false);
    const [epubReader, setEPUBReader] = useState(false);
    const [discourse, setDiscourse] = useState(false);

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext);

    const signOutUser = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            dispatch({type:"LOGOUT"});
            navigate("/landing")
        })
    }

    const ViewBookClubDashboard = () => {
        setBookClubDashboard(true)
        setUserAcountDashboard(false)
        setDiscourse(false)
        setEPUBReader(false)
    }
    const ViewUserAcountDashboard = () => {
        setBookClubDashboard(false)
        setUserAcountDashboard(true)
        setDiscourse(false)
        setEPUBReader(false)
    }
    const ViewDiscourse = () => {
        setBookClubDashboard(false)
        setUserAcountDashboard(false)
        setDiscourse(true)
        setEPUBReader(false)
    }
    const ViewEPUBReader = () => {
        setBookClubDashboard(false)
        setUserAcountDashboard(false)
        setDiscourse(false)
        setEPUBReader(true)
    }
    return (
        
        <div>
            <div className="TopNav" style={{ backgroundColor: 'black '}} >
                <p onClick={signOutUser}>SignOut</p>
            </div>
            <div className="UseraccountDashboardDIV">
                {userAcountDashboard ? <UserAcountDashboard /> : null}
                {bookClubDashboard ? <BookClubDashboard /> : null}
                {epubReader ? <EPUBReader /> : null}
                {discourse ? <ForumView /> : null}
                {/* {discourse ? <Discourse /> : null} */}
            </div>
            
            <div className="BottomNav" >
                <Stack direction="row" spacing={6}>
                    <GridViewOutlinedIcon onClick={ViewBookClubDashboard}/>
                    <PersonOutlineOutlinedIcon onClick={ViewUserAcountDashboard}/>
                    <ChatOutlinedIcon onClick={ViewDiscourse}/>
                    <AutoStoriesOutlinedIcon onClick={ViewEPUBReader}/>
                </Stack>
            </div>
        </div>
    )
}