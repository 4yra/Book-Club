
import { Box } from '@mui/system';
import { Stack } from '@mui/system';

import React, { useState, useEffect } from 'react';
import { db } from '../../FirebaseConf';
import { collection, getDocs} from 'firebase/firestore';
import { TextFieldBox } from './TextField'


export const Discourse = (props) => {

    const messageIcon = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
    }
    const boxStyle = {
        position: 'relative',
        width: '80vw',
        height: '100%',
        margin: '10px auto',
        padding: '10px',
        borderRadius: '10px',
    }
    const textFieldStyle = {
        position: 'fixed',
        left: '0',
        right: '0',
        margin: '10px auto',
        bottom: '60px',
    }
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const dbPostRef = collection(db, 'bookComments') 
        const getPosts = async () => {
            const data = await getDocs(dbPostRef);
            const filterData = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id, date: doc.data().date.toDate()
            }))
            const sortedData = filterData.sort((a, b) => (b.date > a.date ? 1 : -1))
            setPosts(sortedData);
            // setTime(Date(filterData.date))
            console.log(sortedData);
            // console.log(time);
          }
        getPosts();
    }, [])
    function timeFormat(ts) {
        return `${ts.toDateString().slice(4)} - ${ts.toTimeString().slice(0, 9)}`
    }
    return (
        <>
            <div style={boxStyle}>
                {posts.map(c => (
                    <Box key={c.id} style={{width: '60vw', maxWidth:'400px', border:'solid black 1px', margin:'5px auto', padding:'20px'}}>
                        <Stack style={messageIcon} direction='row' spacing={2}>
                            <p>Name: {c.name}</p>
                            <p>Date: {timeFormat(c.date)}</p>
                        </Stack>

                        <p style={{textAlign:'left'}}>{c.text}</p>
                    </Box>
                ))}

            </div>
            <div style={textFieldStyle}>
                <TextFieldBox />
            </div>
        </>

    )
}