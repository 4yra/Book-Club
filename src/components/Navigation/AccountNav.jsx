import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MessageIcon from '@mui/icons-material/Message';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { EPUBView } from "../../components/EPUB/EPUBView"
import { Discourse } from '../Discourse/Discourse';

import './NavStyle.css'


export const AccountNav = () => {
    const [discourse, setShowDiscourse] = useState(false);
    const navigate = useNavigate()
    
    return (
        <>
            {discourse ? <Discourse /> : <EPUBView />}
            <div className="accountNav">
                    <Stack  direction='row' spacing={2}>
                    <button className='AccountNavIcons' onClick={() => navigate('/')}>
                        <AccountCircleIcon />
                    </button>
                    
                    <button className='AccountNavIcons' onClick={() => setShowDiscourse(false)}>
                        <AutoStoriesIcon />
                    </button>

                    <button className='AccountNavIcons' onClick={() => setShowDiscourse(true)}>
                        <MessageIcon />
                    </button>

                </Stack>
            </div>
        </>
    )
}