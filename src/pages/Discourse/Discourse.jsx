
import { Stack } from '@mui/system';

import React, { useState, useEffect } from 'react';
import { db } from '../../FirebaseConf';
import { collection, getDocs} from 'firebase/firestore';
import { TextFieldBox } from './TextField'

import './Discourse.css'

export const Discourse = (props) => {

    
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
        <Stack style={{position: 'relative', height:'calc(100vh - 80px)'}}>
            <div className='discourseDiv'>
                
                {posts.map(c => (
                    <div key={c.id} style={{border:'solid black 1px', borderRadius:'5px', margin:'10px', padding:'20px'}}>
                        <Stack className='mesgMetaData' direction='row' spacing={2}>
                            <p>Name: {c.name}</p>
                            <p>Date: {timeFormat(c.date)}</p>
                        </Stack>

                        <p style={{textAlign:'left'}}>{c.text}</p>
                    </div>
                ))}

            </div>
            <div className='textFieldBox'>
                <TextFieldBox />
            </div>
        </Stack>

    )
}